import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Advertising() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Advertising & Sponsorship Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' Advertising & Sponsorship Policy explains how ads and sponsored content are handled on our platform."
        />
        <meta
          name="keywords"
          content="Kerliix, advertising, sponsorship, sponsored content, promotion guidelines"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/advertising" />

        {/* Open Graph */}
        <meta property="og:title" content="Advertising & Sponsorship Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Learn Kerliix's rules and guidelines for advertising and sponsorships on our platform."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/advertising" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advertising & Sponsorship Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix's Advertising Policy explains sponsorships, promotions, and ad content guidelines."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Advertising & Sponsorship Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Purpose</h2>
          <p className="text-white/90">
            This policy defines the rules for advertising and sponsorships on Kerliix services to ensure transparency and user trust.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Advertising Guidelines</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>All advertisements must comply with local laws and regulations.</li>
            <li>No misleading, harmful, or offensive content is allowed.</li>
            <li>Sponsorships must be clearly disclosed.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Placement & Approval</h2>
          <p className="text-white/90">
            Ads and sponsored content will only appear in approved sections of Kerliix platforms after review by our team.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Contact</h2>
          <p className="text-white/90">For advertising or sponsorship inquiries, contact us at:</p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:ads@kerliix.com" className="text-blue-400 hover:underline">ads@kerliix.com</a></li>
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

