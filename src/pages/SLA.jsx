import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SLA() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Service Level Agreement (SLA) | Kerliix Technologies</title>
        <meta
          name="description"
          content="Read Kerliix Technologies' Service Level Agreement (SLA). Learn about our uptime guarantees, response times, and service commitments."
        />
        <meta
          name="keywords"
          content="Kerliix, SLA, service level agreement, uptime, reliability, enterprise support"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/sla" />

        {/* Open Graph */}
        <meta property="og:title" content="Service Level Agreement (SLA) | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix SLA outlines our uptime guarantees, incident response commitments, and customer support standards."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/sla" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Service Level Agreement (SLA) | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix SLA outlines our uptime guarantees, incident response commitments, and customer support standards."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Service Level Agreement (SLA)",
            "url": "https://policies.kerliix.com/sla",
            "description": "Kerliix SLA outlines our uptime guarantees, response commitments, and service reliability.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Service Level Agreement (SLA)</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Uptime Commitment</h2>
          <p className="text-white/90">
            Kerliix guarantees 99.9% uptime for our core services, excluding scheduled maintenance windows.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Support Response Times</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Critical issues: response within 1 hour.</li>
            <li>High priority: response within 4 hours.</li>
            <li>General inquiries: response within 24 hours.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Exclusions</h2>
          <p className="text-white/90">
            SLA does not cover downtime caused by third-party providers, user errors, or force majeure events.
          </p>
        </section>
      </div>
    </div>
  );
        }
