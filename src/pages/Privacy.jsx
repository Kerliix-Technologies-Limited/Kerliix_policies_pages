import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Privacy Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Read Kerliix Technologies' Privacy Policy to understand how we collect, use, and protect your personal data."
        />
        <meta
          name="keywords"
          content="Kerliix, privacy policy, data protection, GDPR, personal information, security"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/privacy" />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix Technologies Privacy Policy explains how we collect, use, and safeguard your information."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/privacy" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix Technologies Privacy Policy explains how we collect, use, and safeguard your information."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            "name": "Privacy Policy",
            "url": "https://policies.kerliix.com/privacy",
            "description": "Kerliix Technologies Privacy Policy explains how we collect, use, and safeguard your information.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Privacy Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="text-white/90">
            We collect information you provide directly (such as account details, support inquiries) and information collected automatically (such as usage data, cookies, and device information).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Provide and improve our services</li>
            <li>Communicate with you about updates, security, and support</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Sharing of Information</h2>
          <p className="text-white/90">
            We do not sell your personal data. We may share it with trusted service providers, legal authorities if required, and in case of business transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Your Rights</h2>
          <p className="text-white/90">
            Depending on your jurisdiction, you may have the right to access, update, or delete your personal data, as well as object to its processing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
          <p className="text-white/90">
            We implement reasonable technical and organizational safeguards to protect your information from unauthorized access, disclosure, or misuse.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Changes to This Policy</h2>
          <p className="text-white/90">
            We may update this Privacy Policy periodically. Any updates will be posted here with the revised date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p className="text-white/90">
            For privacy-related questions, contact us at:
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