import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ExportPolicy() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Export Control & Sanctions Compliance | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' Export Control & Sanctions Compliance Policy outlines compliance with international trade regulations and restrictions."
        />
        <meta
          name="keywords"
          content="Kerliix, export control, sanctions compliance, trade laws, international compliance"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/export" />

        {/* Open Graph */}
        <meta property="og:title" content="Export Control & Sanctions Compliance | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix Technologies complies with international trade laws and sanctions to ensure lawful global operations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/export" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Export Control & Sanctions Compliance | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix Technologies' Export Control Policy explains compliance with trade restrictions and sanctions."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Policy",
            "name": "Export Control & Sanctions Compliance",
            "url": "https://policies.kerliix.com/export",
            "description": "Kerliix Technologies complies with export control laws and sanctions regulations for safe international operations.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Export Control & Sanctions Compliance Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Compliance with Laws</h2>
          <p className="text-white/90">
            Kerliix complies with all applicable export control, sanctions, and trade regulations in the jurisdictions where we operate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Restricted Countries & Entities</h2>
          <p className="text-white/90">
            Our products and services cannot be exported, re-exported, or provided to countries or entities listed on government sanction lists.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Customer Responsibility</h2>
          <p className="text-white/90">
            Customers agree not to use Kerliix services in violation of export laws or to support prohibited activities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Reporting Violations</h2>
          <p className="text-white/90">
            Any suspected violations of this policy should be reported immediately to our compliance team.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Contact</h2>
          <p className="text-white/90">For export compliance inquiries, contact us at:</p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:compliance@kerliix.com" className="text-blue-400 hover:underline">compliance@kerliix.com</a></li>
            <li>Email: <a href="mailto:legal@kerliix.com" className="text-blue-400 hover:underline">legal@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

