import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AUP() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Acceptable Use Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' Acceptable Use Policy defines the rules and restrictions for using our services responsibly."
        />
        <meta
          name="keywords"
          content="Kerliix, acceptable use policy, AUP, responsible use, prohibited activities"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/aup" />

        {/* Open Graph */}
        <meta property="og:title" content="Acceptable Use Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Read Kerliix Technologies' Acceptable Use Policy to learn about responsible usage of our platforms and services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/aup" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Acceptable Use Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Read Kerliix Technologies' Acceptable Use Policy to learn about responsible usage of our platforms and services."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AcceptableUsePolicy",
            "name": "Acceptable Use Policy",
            "url": "https://policies.kerliix.com/aup",
            "description": "Kerliix Technologies Acceptable Use Policy defines the rules and restrictions for using our services responsibly.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Acceptable Use Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Responsible Use</h2>
          <p className="text-white/90">
            Users must use Kerliix services lawfully and ethically, without violating applicable laws, regulations, or community standards.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Prohibited Activities</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Spamming, phishing, or distributing malware</li>
            <li>Unauthorized access to systems, accounts, or networks</li>
            <li>Harassment, abuse, or dissemination of harmful content</li>
            <li>Using services for illegal activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Enforcement</h2>
          <p className="text-white/90">
            Violation of this policy may result in suspension, termination of accounts, or legal action if necessary.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Reporting Violations</h2>
          <p className="text-white/90">
            If you suspect misuse of our services, please report it to us immediately for investigation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
          <p className="text-white/90">
            For questions or to report violations of this policy, contact us at:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:abuse@kerliix.com" className="text-blue-400 hover:underline">abuse@kerliix.com</a></li>
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
      }
