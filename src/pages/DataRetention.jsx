import React from "react";
import { Helmet } from "react-helmet-async";

export default function DataRetention() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Data Retention & Deletion Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies Data Retention & Deletion Policy explains how long we keep data and how users can request deletion."
        />
        <meta
          name="keywords"
          content="Kerliix, data retention, deletion policy, GDPR, data storage"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link
          rel="canonical"
          href="https://policies.kerliix.com/data-retention"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Data Retention & Deletion Policy | Kerliix Technologies"
        />
        <meta
          property="og:description"
          content="How Kerliix stores, retains, and deletes user data in line with data protection regulations."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />
        <meta
          property="og:url"
          content="https://policies.kerliix.com/data-retention"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "name": "Data Retention & Deletion Policy",
            "url": "https://policies.kerliix.com/data-retention",
            "publisher": {
              "@type": "Organization",
              "name": "Kerliix Technologies",
              "logo": {
                "@type": "ImageObject",
                "url":
                  "https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png",
              },
            },
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">
          Data Retention & Deletion Policy
        </h1>
        <p className="mb-8 text-white/90">Last updated: September 04, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Retention Periods</h2>
          <p className="text-white/90">
            We retain personal data only as long as necessary to provide our
            services, comply with legal obligations, and resolve disputes. Some
            data may be retained longer for legitimate business or compliance
            purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Deletion Requests</h2>
          <p className="text-white/90">
            Users may request deletion of their personal data by contacting us
            at{" "}
            <a
              href="mailto:privacy@kerliix.com"
              className="text-blue-400 hover:underline"
            >
              privacy@kerliix.com
            </a>
            . We will respond within a reasonable timeframe, subject to legal
            and regulatory requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            3. Exceptions to Deletion
          </h2>
          <p className="text-white/90">
            Some data may be retained where required by law, for fraud
            prevention, dispute resolution, or to enforce agreements. See also
            our{" "}
            <a
              href="https://policies.kerliix.com/gdpr"
              className="text-blue-400 hover:underline"
            >
              Data Processing / GDPR Policy
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

