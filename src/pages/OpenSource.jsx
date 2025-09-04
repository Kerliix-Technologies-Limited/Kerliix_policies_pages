import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function OpenSource() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Open Source Contribution Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' Open Source Contribution Policy explains rules and guidelines for contributing to our open source projects."
        />
        <meta
          name="keywords"
          content="Kerliix, open source, contributions, guidelines, community projects"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/open-source" />

        {/* Open Graph */}
        <meta property="og:title" content="Open Source Contribution Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Learn how to contribute safely and responsibly to Kerliix open source projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/open-source" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Open Source Contribution Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix's Open Source Contribution Policy provides guidance for contributors."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Open Source Contribution Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Purpose</h2>
          <p className="text-white/90">
            This policy sets rules for contributing to Kerliix open source projects to ensure safety, clarity, and legal compliance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Contributor Guidelines</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Contributions must comply with licensing terms.</li>
            <li>Code should meet our quality and security standards.</li>
            <li>Respect community guidelines and maintain professional conduct.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. License</h2>
          <p className="text-white/90">
            All contributions will be licensed under the same license as the original project unless otherwise agreed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Contact</h2>
          <p className="text-white/90">Questions regarding contributions can be sent to:</p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:opensource@kerliix.com" className="text-blue-400 hover:underline">opensource@kerliix.com</a></li>
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

