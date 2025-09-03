import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Security() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Security Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' Security Policy outlines the measures we take to protect data, systems, and users from unauthorized access and threats."
        />
        <meta
          name="keywords"
          content="Kerliix, security policy, data protection, cybersecurity, encryption"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/security" />

        {/* Open Graph */}
        <meta property="og:title" content="Security Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Learn how Kerliix Technologies protects data, systems, and users with strong security practices and policies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/security" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Security Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Learn how Kerliix Technologies protects data, systems, and users with strong security practices and policies."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SecurityPolicy",
            "name": "Security Policy",
            "url": "https://policies.kerliix.com/security",
            "description": "Kerliix Technologies' Security Policy outlines the measures we take to protect data, systems, and users from unauthorized access and threats.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Security Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Data Protection</h2>
          <p className="text-white/90">
            We use industry-standard encryption, secure storage, and access control measures to safeguard customer data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Network Security</h2>
          <p className="text-white/90">
            Our infrastructure is protected by firewalls, intrusion detection systems, and continuous monitoring for potential threats.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Employee Practices</h2>
          <p className="text-white/90">
            All employees undergo security awareness training and follow strict access protocols to reduce risks of internal threats.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Incident Response</h2>
          <p className="text-white/90">
            We maintain an incident response plan to quickly address, mitigate, and communicate any security breaches.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
          <p className="text-white/90">
            If you have security concerns or discover vulnerabilities, contact us at:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:security@kerliix.com" className="text-blue-400 hover:underline">security@kerliix.com</a></li>
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}