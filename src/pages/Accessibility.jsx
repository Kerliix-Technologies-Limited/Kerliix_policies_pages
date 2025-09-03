import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Accessibility() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Accessibility Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies is committed to ensuring digital accessibility for all users, including people with disabilities."
        />
        <meta
          name="keywords"
          content="Kerliix, accessibility, WCAG, ADA, inclusivity, web accessibility"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/accessibility" />

        {/* Open Graph */}
        <meta property="og:title" content="Accessibility Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix Technologies is committed to ensuring digital accessibility for all users, including people with disabilities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/accessibility" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Accessibility Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix Technologies is committed to ensuring digital accessibility for all users, including people with disabilities."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Accessibility Policy",
            "url": "https://policies.kerliix.com/accessibility",
            "description": "Kerliix Technologies is committed to ensuring digital accessibility for all users, including people with disabilities.",
            "publisher": {
              "@type": "Organization",
              "name": "Kerliix Technologies",
              "logo": {
                "@type": "ImageObject",
                "url": "https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Accessibility Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Our Commitment</h2>
          <p className="text-white/90">
            Kerliix Technologies is committed to ensuring that our services and digital platforms are accessible to everyone, including people with disabilities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Standards</h2>
          <p className="text-white/90">
            We aim to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and other relevant accessibility standards.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Continuous Improvements</h2>
          <p className="text-white/90">
            Our team regularly reviews and updates our platforms to improve accessibility and usability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Feedback</h2>
          <p className="text-white/90">
            If you encounter any accessibility barriers, please let us know so we can improve your experience:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:accessibility@kerliix.com" className="text-blue-400 hover:underline">accessibility@kerliix.com</a></li>
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}