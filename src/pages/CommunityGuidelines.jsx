import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CommunityGuidelines() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Community Guidelines | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' Community Guidelines outline the standards of behavior and responsibilities for our users."
        />
        <meta
          name="keywords"
          content="Kerliix, community, guidelines, user conduct, acceptable use, safety"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/community" />

        {/* Open Graph */}
        <meta property="og:title" content="Community Guidelines | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix Technologies' Community Guidelines outline the standards of behavior and responsibilities for our users."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/community" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Community Guidelines | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix Technologies' Community Guidelines outline the standards of behavior and responsibilities for our users."
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
            "name": "Community Guidelines",
            "url": "https://policies.kerliix.com/community",
            "description": "Kerliix Technologies' Community Guidelines outline the standards of behavior and responsibilities for our users.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Community Guidelines</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Respect Others</h2>
          <p className="text-white/90">
            Treat everyone with respect. Harassment, hate speech, or abusive behavior will not be tolerated.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Safe Environment</h2>
          <p className="text-white/90">
            Keep our community safe. Do not share harmful, illegal, or dangerous content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Authenticity</h2>
          <p className="text-white/90">
            Provide accurate information. Do not impersonate others or misrepresent yourself.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Collaboration</h2>
          <p className="text-white/90">
            Contribute positively to discussions, share knowledge, and help build a supportive ecosystem.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Enforcement</h2>
          <p className="text-white/90">
            Violations of these guidelines may result in warnings, suspension, or permanent removal from our platforms.
          </p>
        </section>
      </div>
    </div>
  );
}