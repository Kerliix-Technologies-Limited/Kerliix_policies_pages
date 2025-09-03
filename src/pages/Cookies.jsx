import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Cookies() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Cookie Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' Cookie Policy explains how we use cookies and similar technologies to improve your browsing experience."
        />
        <meta
          name="keywords"
          content="Kerliix, cookie policy, cookies, tracking technologies, privacy"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/cookies" />

        {/* Open Graph */}
        <meta property="og:title" content="Cookie Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Learn how Kerliix Technologies uses cookies and similar technologies to enhance user experience and provide secure services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/cookies" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cookie Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Learn how Kerliix Technologies uses cookies and similar technologies to enhance user experience and provide secure services."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CookiePolicy",
            "name": "Cookie Policy",
            "url": "https://policies.kerliix.com/cookies",
            "description": "Kerliix Technologies Cookie Policy explains how we use cookies and similar technologies to improve your browsing experience.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Cookie Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. What Are Cookies?</h2>
          <p className="text-white/90">
            Cookies are small files stored on your device that help us remember your preferences, analyze usage, and improve our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Cookies</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>To remember login details and user preferences</li>
            <li>To analyze traffic and improve performance</li>
            <li>To provide personalized content and security features</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Types of Cookies We Use</h2>
          <p className="text-white/90">
            We use essential, performance, functionality, and analytics cookies to improve the quality of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Managing Cookies</h2>
          <p className="text-white/90">
            You can manage or disable cookies in your browser settings. Please note that disabling essential cookies may impact site functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
          <p className="text-white/90">
            For questions about our Cookie Policy, contact us at:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
            <li>Email: <a href="mailto:privacy@kerliix.com" className="text-blue-400 hover:underline">privacy@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}