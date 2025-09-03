import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function EULA() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>End User License Agreement (EULA) | Kerliix Technologies</title>
        <meta
          name="description"
          content="Review Kerliix Technologies' End User License Agreement (EULA). Understand your rights and responsibilities when using our software and services."
        />
        <meta
          name="keywords"
          content="Kerliix, EULA, end user license agreement, software license, usage rights"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/eula" />

        {/* Open Graph */}
        <meta property="og:title" content="End User License Agreement (EULA) | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix Technologies' EULA explains the terms and conditions of using our licensed software and applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/eula" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="End User License Agreement (EULA) | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix Technologies' EULA explains the terms and conditions of using our licensed software and applications."
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
            "name": "End User License Agreement (EULA)",
            "url": "https://policies.kerliix.com/eula",
            "description": "Kerliix Technologies' EULA explains the rights and limitations of using our licensed software and services.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">End User License Agreement (EULA)</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. License Grant</h2>
          <p className="text-white/90">
            Kerliix grants you a limited, non-exclusive, non-transferable license to use our software in accordance with this EULA.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Restrictions</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>You may not reverse-engineer, decompile, or distribute our software without permission.</li>
            <li>Use of our software must comply with applicable laws and Kerliix policies.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Ownership</h2>
          <p className="text-white/90">
            All rights, title, and interest in the software remain with Kerliix Technologies and our licensors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Termination</h2>
          <p className="text-white/90">
            Violation of this EULA may result in termination of your license to use our software.
          </p>
        </section>
      </div>
    </div>
  );
        }
