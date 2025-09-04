import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function COPPA() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>COPPA Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies COPPA policy outlines how we comply with the Children's Online Privacy Protection Act and safeguard children's data."
        />
        <meta
          name="keywords"
          content="Kerliix, COPPA, children's privacy, child data protection, online safety, parental consent"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/coppa" />

        {/* Open Graph */}
        <meta property="og:title" content="COPPA Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix Technologies' COPPA policy explains our practices in protecting children's online privacy and parental consent requirements."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/coppa" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="COPPA Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix Technologies' COPPA policy explains our practices in protecting children's online privacy and parental consent requirements."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "COPPA Policy",
            "url": "https://policies.kerliix.com/coppa",
            "description": "Kerliix Technologies' COPPA policy explains our practices in protecting children's online privacy and parental consent requirements.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Children’s Online Privacy Protection Act (COPPA)</h1>
        <p className="mb-8 text-white/90">Last updated: September 04, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Overview</h2>
          <p className="text-white/90">
            Kerliix Technologies complies with the Children’s Online Privacy Protection Act (COPPA). This policy explains
            how we handle information related to children under the age of 13 who may use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect from Children</h2>
          <p className="text-white/90">
            We do not knowingly collect personal information from children under 13 without verifiable parental consent.
            If such information is discovered, we will promptly delete it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Parental Rights</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Parents can review the personal information collected from their child</li>
            <li>Parents may revoke consent and request deletion of their child’s information</li>
            <li>Parents may refuse further collection or use of their child’s data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Use of Children’s Information</h2>
          <p className="text-white/90">
            Any data collected (with parental consent) is used solely to provide age-appropriate services and is never
            shared, sold, or used for marketing purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Contact for COPPA Inquiries</h2>
          <p className="text-white/90">If you are a parent or guardian with questions about our COPPA policy, contact us:</p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:privacy@kerliix.com" className="text-blue-400 hover:underline">privacy@kerliix.com</a></li>
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
