import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function GDPR() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>GDPR Compliance | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' GDPR Compliance page explains how we handle personal data in line with EU regulations."
        />
        <meta
          name="keywords"
          content="Kerliix, GDPR, data protection, EU compliance, privacy rights"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/gdpr" />

        {/* Open Graph */}
        <meta property="og:title" content="GDPR Compliance | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Learn how Kerliix Technologies complies with GDPR regulations to protect personal data and uphold user rights."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/gdpr" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GDPR Compliance | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Learn how Kerliix Technologies complies with GDPR regulations to protect personal data and uphold user rights."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            "name": "GDPR Compliance",
            "url": "https://policies.kerliix.com/gdpr",
            "description": "Kerliix Technologies' GDPR Compliance policy explains how we handle personal data in line with EU regulations and user rights.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">GDPR Compliance</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Data Collection</h2>
          <p className="text-white/90">
            We collect only the personal data necessary to deliver our services, such as account details and transaction information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. User Rights</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Right to access your personal data</li>
            <li>Right to request corrections or deletion</li>
            <li>Right to restrict or object to processing</li>
            <li>Right to data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Legal Basis</h2>
          <p className="text-white/90">
            We process data based on user consent, contractual necessity, or legitimate interests under GDPR.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Data Transfers</h2>
          <p className="text-white/90">
            When data is transferred outside the EU, we ensure adequate safeguards such as Standard Contractual Clauses (SCCs).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
          <p className="text-white/90">
            For GDPR inquiries or to exercise your rights, contact us at:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:privacy@kerliix.com" className="text-blue-400 hover:underline">privacy@kerliix.com</a></li>
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}