import React from "react";
import { Helmet } from "react-helmet-async";

export default function Disclosure() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Responsible Disclosure Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies Responsible Disclosure Policy outlines how to report security vulnerabilities safely and responsibly."
        />
        <meta
          name="keywords"
          content="Kerliix, responsible disclosure, vulnerability reporting, security policy"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link
          rel="canonical"
          href="https://policies.kerliix.com/disclosure"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Responsible Disclosure Policy | Kerliix Technologies"
        />
        <meta
          property="og:description"
          content="Guidelines for reporting security vulnerabilities to Kerliix Technologies."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />
        <meta
          property="og:url"
          content="https://policies.kerliix.com/disclosure"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "name": "Responsible Disclosure Policy",
            "url": "https://policies.kerliix.com/disclosure",
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
          Responsible Disclosure Policy
        </h1>
        <p className="mb-8 text-white/90">Last updated: September 04, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Our Commitment</h2>
          <p className="text-white/90">
            At Kerliix, security is a top priority. We encourage security
            researchers, developers, and the community to report vulnerabilities
            responsibly so we can address them quickly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            2. Reporting Vulnerabilities
          </h2>
          <p className="text-white/90">
            If you discover a security issue, please report it to us via{" "}
            <a
              href="mailto:security@kerliix.com"
              className="text-blue-400 hover:underline"
            >
              security@kerliix.com
            </a>
            . Provide as much detail as possible (steps to reproduce, impact,
            and proof of concept).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Guidelines</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Avoid accessing, modifying, or deleting user data.</li>
            <li>Do not exploit vulnerabilities beyond testing purposes.</li>
            <li>Allow us reasonable time to fix the issue before disclosing.</li>
            <li>Respect user privacy and data protection.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Recognition</h2>
          <p className="text-white/90">
            We may publicly acknowledge responsible researchers in our{" "}
            <a
              href="https://policies.kerliix.com/transparency"
              className="text-blue-400 hover:underline"
            >
              Transparency Report
            </a>{" "}
            if they follow this policy.
          </p>
        </section>
      </div>
    </div>
  );
}

