import React from "react";
import { Helmet } from "react-helmet-async";

export default function Transparency() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Transparency Report | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies publishes transparency reports on requests, actions, and community safety to build trust with users."
        />
        <meta
          name="keywords"
          content="Kerliix, transparency, reports, accountability, trust, community safety"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/transparency" />

        {/* Open Graph */}
        <meta property="og:title" content="Transparency Report | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Our transparency reports outline government requests, moderation actions, and steps we take to protect users."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/transparency" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "name": "Transparency Report",
            "url": "https://policies.kerliix.com/transparency",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Transparency Report</h1>
        <p className="mb-8 text-white/90">Last updated: September 04, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Why Transparency Matters</h2>
          <p className="text-white/90">
            Transparency builds trust. We regularly publish reports to keep our community informed about 
            data requests, enforcement actions, and other measures that affect user rights and platform safety.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. What We Report</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Government and legal requests for user data</li>
            <li>Content removal and moderation statistics</li>
            <li>Account suspensions and enforcement actions</li>
            <li>Steps taken to safeguard privacy and security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Accessing Reports</h2>
          <p className="text-white/90">
            Our reports will be published periodically and made publicly available at{" "}
            <a href="https://policies.kerliix.com/transparency" className="text-blue-400 hover:underline">
              policies.kerliix.com/transparency
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}