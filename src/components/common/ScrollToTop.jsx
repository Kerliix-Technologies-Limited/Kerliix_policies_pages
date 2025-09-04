import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = {};

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to the element
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // Check if we have a saved scroll position for this page
    if (scrollPositions[pathname]) {
      window.scrollTo({ top: scrollPositions[pathname], behavior: "smooth" });
    } else {
      // Otherwise, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Save scroll position before navigating away
    const saveScroll = () => {
      scrollPositions[pathname] = window.scrollY;
    };

    window.addEventListener("beforeunload", saveScroll);
    return () => window.removeEventListener("beforeunload", saveScroll);
  }, [pathname, hash, key]);

  // Save scroll position when navigating away
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions[pathname] = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return null;
}
