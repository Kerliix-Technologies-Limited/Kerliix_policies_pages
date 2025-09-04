import React from "react";
import { Helmet } from "react-helmet-async";

export default function AIEthics() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>AI & Ethics Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies AI & Ethics Policy ensures the responsible, ethical, and fair use of artificial intelligence in our services."
        />
        <meta
          name="keywords"
          content="Kerliix, AI ethics, artificial intelligence, responsible AI, fairness, transparency"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/ai-ethics" />

        {/* Open Graph */}
        <meta property="og:title" content="AI & Ethics Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Our AI & Ethics Policy outlines how we design, use, and manage AI systems responsibly and fairly."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/ai-ethics" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "name": "AI & Ethics Policy",
            "url": "https://policies.kerliix.com/ai-ethics",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">AI & Ethics Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 04, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Responsible AI Development</h2>
          <p className="text-white/90">
            We are committed to building artificial intelligence systems that respect human rights, fairness, and transparency. 
            Our AI technologies are developed in compliance with international standards and ethical principles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Principles We Follow</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Fairness and non-discrimination</li>
            <li>Transparency and explainability</li>
            <li>Accountability for AI-driven decisions</li>
            <li>Privacy and data protection by design</li>
            <li>Human oversight in critical systems</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Misuse Prevention</h2>
          <p className="text-white/90">
            Kerliix prohibits the use of AI technologies for harmful purposes, 
            including but not limited to surveillance abuses, discrimination, misinformation, or violations of fundamental rights.
          </p>
        </section>
      </div>
    </div>
  );
}

