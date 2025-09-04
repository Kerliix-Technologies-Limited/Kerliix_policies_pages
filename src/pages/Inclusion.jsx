import React from "react";
import { Helmet } from "react-helmet-async";

export default function Inclusion() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Equality, Diversity & Inclusion Statement | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies is committed to equality, diversity, and inclusion across our teams, services, and community."
        />
        <meta
          name="keywords"
          content="Kerliix, equality, diversity, inclusion, accessibility, values"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/inclusion" />

        {/* Open Graph */}
        <meta property="og:title" content="Equality, Diversity & Inclusion Statement | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Learn about our commitment to fostering an inclusive, diverse, and accessible environment for all."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/inclusion" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "name": "Equality, Diversity & Inclusion Statement",
            "url": "https://policies.kerliix.com/inclusion",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">
          Equality, Diversity & Inclusion Statement
        </h1>
        <p className="mb-8 text-white/90">Last updated: September 04, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Our Commitment</h2>
          <p className="text-white/90">
            At Kerliix, we believe diversity drives innovation and inclusion strengthens our community. 
            We are committed to providing equal opportunities, fair treatment, and a respectful environment for all employees, users, and partners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Key Principles</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Zero tolerance for discrimination or harassment</li>
            <li>Promotion of accessibility and inclusivity in our services</li>
            <li>Encouraging diverse perspectives and backgrounds</li>
            <li>Providing resources for underrepresented communities</li>
            <li>Regular evaluation of inclusion efforts and accountability</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

