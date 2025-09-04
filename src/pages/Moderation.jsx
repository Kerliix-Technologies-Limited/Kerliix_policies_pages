import React from "react";
import { Helmet } from "react-helmet-async";

export default function Moderation() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Moderator & Enforcement Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies Moderator & Enforcement Policy outlines how we maintain community standards and enforce platform rules."
        />
        <meta
          name="keywords"
          content="Kerliix, moderation, enforcement, community guidelines, content policy"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/moderation" />

        {/* Open Graph */}
        <meta property="og:title" content="Moderator & Enforcement Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="How Kerliix enforces rules, handles violations, and ensures a safe and respectful community."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/moderation" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "name": "Moderator & Enforcement Policy",
            "url": "https://policies.kerliix.com/moderation",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Moderator & Enforcement Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 04, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Purpose</h2>
          <p className="text-white/90">
            Our moderation system ensures that Kerliix remains a safe, respectful, and inclusive platform. 
            This policy explains how we enforce our{" "}
            <a href="https://policies.kerliix.com/community" className="text-blue-400 hover:underline">
              Community Guidelines
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Enforcement Actions</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Content removal for violating our rules</li>
            <li>Temporary or permanent account suspensions</li>
            <li>Warnings and education for minor infractions</li>
            <li>Escalation to legal authorities when necessary</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Appeals</h2>
          <p className="text-white/90">
            Users may appeal moderation decisions by contacting{" "}
            <a href="mailto:appeals@kerliix.com" className="text-blue-400 hover:underline">
              appeals@kerliix.com
            </a>. Appeals will be reviewed fairly and independently.
          </p>
        </section>
      </div>
    </div>
  );
}

