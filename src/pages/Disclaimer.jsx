import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Disclaimer() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Disclaimer | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' Disclaimer outlines the limits of liability for the use of our website, products, and services."
        />
        <meta
          name="keywords"
          content="Kerliix, disclaimer, liability, warranty, limitations, legal notice"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/disclaimer" />

        {/* Open Graph */}
        <meta property="og:title" content="Disclaimer | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix Technologies' Disclaimer outlines the limits of liability for the use of our website, products, and services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/disclaimer" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Disclaimer | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix Technologies' Disclaimer outlines the limits of liability for the use of our website, products, and services."
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
            "name": "Disclaimer",
            "url": "https://policies.kerliix.com/disclaimer",
            "description": "Kerliix Technologies' Disclaimer outlines the limits of liability for the use of our website, products, and services.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Disclaimer</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. General Information</h2>
          <p className="text-white/90">
            The information provided by Kerliix Technologies is for general informational purposes only. While we strive for accuracy, we make no representations or warranties of any kind.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Limitation of Liability</h2>
          <p className="text-white/90">
            Kerliix Technologies shall not be held liable for any damages, losses, or consequences arising from the use of our website, services, or products.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. External Links</h2>
          <p className="text-white/90">
            Our website may contain links to third-party sites. We are not responsible for the content, accuracy, or policies of those external websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. No Professional Advice</h2>
          <p className="text-white/90">
            Any information provided on our website does not constitute legal, financial, or professional advice. Always consult qualified professionals for specific concerns.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
          <p className="text-white/90">
            For questions about this Disclaimer, contact us at:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:legal@kerliix.com" className="text-blue-400 hover:underline">legal@kerliix.com</a></li>
            <li>Email: <a href="mailto:info@kerliix.com" className="text-blue-400 hover:underline">info@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}