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
          content="Kerliix, privacy policy, data protection, GDPR, personal information, security, cookies"
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
            We collect information you provide directly (such as account details, support inquiries, payment information) and information collected automatically (such as usage data, cookies, and device information). For more, see our <a href="https://policies.kerliix.com/cookies" className="text-blue-400 hover:underline">Cookie Policy</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Provide, maintain, and improve our Services</li>
            <li>Process payments, billing, and subscriptions</li>
            <li>Communicate with you about updates, security, and support</li>
            <li>Personalize your experience</li>
            <li>Comply with legal obligations</li>
            <li>Ensure security and prevent fraud or misuse</li>
            <li>Conduct analytics and research</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Sharing and Disclosure</h2>
          <p className="text-white/90">
            We do not sell your personal data. We may share it:
          </p>
          <ul className="list-disc pl-5 text-white/90">
            <li>With trusted service providers performing services on our behalf</li>
            <li>For legal reasons or to protect rights and safety</li>
            <li>In business transfers such as mergers or acquisitions</li>
            <li>With your consent</li>
          </ul>
          <p className="text-white/90">
            See our <a href="https://policies.kerliix.com/security" className="text-blue-400 hover:underline">Security Policy</a> and <a href="https://policies.kerliix.com/gdpr" className="text-blue-400 hover:underline">Data Processing / GDPR Policy</a> for more details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Your Rights</h2>
          <p className="text-white/90">
            Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict processing of your personal data, and withdraw consent. To exercise these rights, contact us at <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Data Retention</h2>
          <p className="text-white/90">
            We retain personal information only as long as necessary to fulfill the purposes outlined, including legal, accounting, or reporting obligations. See our <a href="https://policies.kerliix.com/data-retention" className="text-blue-400 hover:underline">Data Retention & Deletion Policy</a> for details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Children’s Privacy</h2>
          <p className="text-white/90">
            Our Services are not intended for children under 13. We do not knowingly collect information from children under 13. For details, see our <a href="https://policies.kerliix.com/coppa" className="text-blue-400 hover:underline">Children’s Privacy & Age Restriction Policy</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Third-Party Services</h2>
          <p className="text-white/90">
            Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices of third parties. Use them at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Security of Your Information</h2>
          <p className="text-white/90">
            We implement appropriate technical, administrative, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. See our <a href="https://policies.kerliix.com/security" className="text-blue-400 hover:underline">Security Policy</a> for details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">9. International Transfers</h2>
          <p className="text-white/90">
            If you access our Services from outside Uganda (or our operational jurisdiction), your information may be transferred, stored, and processed in countries with different data protection laws. We implement safeguards to protect your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">10. Changes to This Policy</h2>
          <p className="text-white/90">
            We may update this Privacy Policy periodically. Updates will be posted on our <a href="https://policies.kerliix.com" className="text-blue-400 hover:underline">Policies Hub</a> with a revised effective date. Continued use of Services constitutes acceptance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
          <p className="text-white/90">
            For privacy-related questions or to exercise your data rights:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
            <li>Email: <a href="mailto:privacy@kerliix.com" className="text-blue-400 hover:underline">privacy@kerliix.com</a></li>
            <li>Policies Hub: <a href="https://policies.kerliix.com" className="text-blue-400 hover:underline">https://policies.kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
      }
