import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function IncidentResponse() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Incident Response Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' Incident Response Policy explains how we respond to security breaches, vulnerabilities, and misuse of our services."
        />
        <meta
          name="keywords"
          content="Kerliix, incident response, security policy, breach response, data security"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/incident-response" />

        {/* Open Graph */}
        <meta property="og:title" content="Incident Response Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix Technologies' Incident Response Policy ensures swift action against security incidents and misuse."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/incident-response" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Incident Response Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Learn how Kerliix Technologies investigates and mitigates security breaches or vulnerabilities."
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
            "name": "Incident Response Policy",
            "url": "https://policies.kerliix.com/incident-response",
            "description": "Kerliix Technologies' Incident Response Policy describes procedures for handling security breaches and vulnerabilities.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Incident Response Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Purpose</h2>
          <p className="text-white/90">
            This policy ensures Kerliix can detect, investigate, and respond to security incidents quickly and effectively to protect our users and systems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Identification & Reporting</h2>
          <p className="text-white/90">
            All employees, partners, and users are encouraged to report suspected security incidents immediately to our security team.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Investigation</h2>
          <p className="text-white/90">
            Our security team will analyze incidents, determine impact, and take necessary steps to contain and mitigate risks.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Communication</h2>
          <p className="text-white/90">
            We will notify affected users, regulators, or partners as required by law or contractual obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Continuous Improvement</h2>
          <p className="text-white/90">
            After each incident, Kerliix conducts a post-incident review to improve security processes and prevent recurrence.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Contact</h2>
          <p className="text-white/90">For security incidents, contact us at:</p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:security@kerliix.com" className="text-blue-400 hover:underline">security@kerliix.com</a></li>
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

