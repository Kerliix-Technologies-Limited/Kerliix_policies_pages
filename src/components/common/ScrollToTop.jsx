import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component for smooth scrolling.
 * Supports both route changes and hash links.
 * Place this inside your Router in App.jsx
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there is a hash, scroll to the element with that id
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Otherwise, scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}
