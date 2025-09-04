import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Partnerships() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Partnership & Integration Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' Partnership & Integration Policy outlines guidelines for third-party partnerships, API usage, and integrations."
        />
        <meta
          name="keywords"
          content="Kerliix, partnerships, integrations, API, third-party, developer policy"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/partnerships" />

        {/* Open Graph */}
        <meta property="og:title" content="Partnership & Integration Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Guidelines for third-party developers, integrations, and partnerships with Kerliix Technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/partnerships" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partnership & Integration Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix Partnerships Policy explains rules and guidelines for third-party developers and integrations."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Partnership & Integration Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Purpose</h2>
          <p className="text-white/90">
            This policy establishes rules and guidelines for third-party partnerships, API usage, and integrations with Kerliix Technologies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Partnership Guidelines</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>All partnerships must comply with Kerliix standards and applicable laws.</li>
            <li>Third-party products or services must not harm users or disrupt Kerliix operations.</li>
            <li>Kerliix reserves the right to terminate partnerships for non-compliance.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Integration Rules</h2>
          <p className="text-white/90">
            API and integration use must follow Kerliix documentation, authentication rules, and security practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Contact</h2>
          <p className="text-white/90">For partnership inquiries, contact us at:</p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:partners@kerliix.com" className="text-blue-400 hover:underline">partners@kerliix.com</a></li>
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

