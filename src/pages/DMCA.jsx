import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function DMCA() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>DMCA Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' DMCA Policy explains how we handle copyright infringement notifications and takedown requests."
        />
        <meta
          name="keywords"
          content="Kerliix, DMCA, copyright, intellectual property, takedown notice"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/dmca" />

        {/* Open Graph */}
        <meta property="og:title" content="DMCA Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Learn how Kerliix Technologies handles copyright infringement notifications and takedown requests under the DMCA."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/dmca" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DMCA Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Learn how Kerliix Technologies handles copyright infringement notifications and takedown requests under the DMCA."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DigitalDocument",
            "name": "DMCA Policy",
            "url": "https://policies.kerliix.com/dmca",
            "description": "Kerliix Technologies' DMCA Policy explains how we handle copyright infringement notifications and takedown requests.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">DMCA Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Copyright Compliance</h2>
          <p className="text-white/90">
            Kerliix Technologies respects intellectual property rights and complies with the Digital Millennium Copyright Act (DMCA).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Reporting Infringements</h2>
          <p className="text-white/90">
            If you believe your work has been used in a way that constitutes copyright infringement, please submit a written notice including:
          </p>
          <ul className="list-disc pl-5 text-white/90">
            <li>Your contact information</li>
            <li>A description of the copyrighted work</li>
            <li>The exact location (URL) of the infringing material</li>
            <li>A statement of good faith belief</li>
            <li>Your signature (physical or electronic)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Counter-Notice</h2>
          <p className="text-white/90">
            If you believe content was removed by mistake, you may submit a counter-notice as permitted by the DMCA.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Contact</h2>
          <p className="text-white/90">
            Send DMCA notices to:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:dmca@kerliix.com" className="text-blue-400 hover:underline">dmca@kerliix.com</a></li>
            <li>Email: <a href="mailto:legal@kerliix.com" className="text-blue-400 hover:underline">legal@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}