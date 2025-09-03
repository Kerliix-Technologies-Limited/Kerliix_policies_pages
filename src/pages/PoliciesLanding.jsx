import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const policySections = {
  "Core Legal": [
    { name: "Terms of Service", link: "/terms", description: "Rules for using Kerliix services safely and responsibly." },
    { name: "Privacy Policy", link: "/privacy", description: "How we collect, use, and protect your data." },
    { name: "Refund & Cancellation Policy", link: "/refund", description: "Guidelines for refunds, cancellations, and returns." },
    { name: "Cookie Policy", link: "/cookies", description: "How we use cookies and tracking technologies." },
    { name: "Disclaimer", link: "/disclaimer", description: "Legal disclaimers regarding our services and content." },
    { name: "End User License Agreement (EULA)", link: "/eula", description: "Terms for using our software and applications." },
    { name: "Children’s Privacy & Age Restriction Policy", link: "/coppa", description: "Rules for users under 13 and age restrictions." },
    { name: "Payment & Billing Policy", link: "/billing", description: "Payment terms, billing cycles, and related policies." },
  ],

  "Data & Security": [
    { name: "Security Policy", link: "/security", description: "How we protect your information and systems." },
    { name: "Data Processing / GDPR Policy", link: "/gdpr", description: "Compliance with GDPR and data protection laws." },
    { name: "Data Retention & Deletion Policy", link: "/data-retention", description: "How long we keep your data and how we delete it." },
    { name: "Responsible Disclosure Policy", link: "/disclosure", description: "Guidelines for reporting security vulnerabilities." },
    { name: "Incident Response Policy", link: "/incident-response", description: "How we handle security incidents and breaches." },
    { name: "AI & Ethics Policy", link: "/ai-ethics", description: "Ethical guidelines for AI usage and development." },
    { name: "Export Control & Sanctions Compliance Policy", link: "/export", description: "Rules for international compliance and restrictions." },
  ],

  "Community & Trust": [
    { name: "Acceptable Use Policy", link: "/aup", description: "Guidelines for proper use of our platform." },
    { name: "Community Guidelines", link: "/community", description: "Standards for interacting respectfully in our community." },
    { name: "Accessibility Statement", link: "/accessibility", description: "Our commitment to accessible services." },
    { name: "DMCA / Copyright Policy", link: "/dmca", description: "Copyright and intellectual property rules." },
    { name: "Moderator & Enforcement Policy", link: "/moderation", description: "How we enforce community standards." },
    { name: "Equality, Diversity & Inclusion Statement", link: "/inclusion", description: "Our values on inclusivity and diversity." },
    { name: "Transparency Report", link: "/transparency", description: "Reports on requests and actions affecting users." },
  ],

  "Business & Partnerships": [
    { name: "Partnership & Integration Policy", link: "/partnerships", description: "Guidelines for working with partners and integrations." },
    { name: "Open Source Contribution Policy", link: "/opensource", description: "Rules for contributing to open source projects." },
    { name: "Advertising & Sponsorship Policy", link: "/advertising", description: "Standards for ads and sponsorships on our platform." },
    { name: "User Content & Licensing Policy", link: "/content", description: "Rights and responsibilities around user-generated content." },
  ],
};

export default function PoliciesLanding() {
  useEffect(() => {
    document.title = "Policies & Legal Information – Kerliix Technologies";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-6">
      <Helmet>
        <title>Policies & Legal Information | Kerliix Technologies</title>
        <meta
          name="description"
          content="Explore Kerliix Technologies' policies on legal compliance, security, data protection, community trust, and business partnerships."
        />
        <meta
          name="keywords"
          content="Kerliix, policies, legal, terms, privacy, security, GDPR, community, partnerships"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Policies & Legal Information | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Learn about Kerliix Technologies’ policies on legal, data, security, community, and business standards."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Policies & Legal Information | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Learn about Kerliix Technologies’ policies on legal, data, security, community, and business standards."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Policies & Legal Information",
            "url": "https://policies.kerliix.com",
            "description": "Kerliix Technologies policies on legal compliance, security, data protection, community trust, and business partnerships.",
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

      {/* Hero Section */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          Policies & Legal Information
        </h1>
        <p className="text-lg text-white/90">
          Stay informed about Kerliix Technologies’ commitments to safety,
          transparency, and compliance. Explore our policies below.
        </p>
      </div>

      {/* Sections of Policies */}
      <div className="w-full max-w-6xl space-y-16">
        {Object.entries(policySections).map(([section, policies]) => (
          <section key={section}>
            <h2 className="text-2xl font-semibold text-blue-400 mb-6">
              {section}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {policies.map((policy, idx) => (
                <Link
                  key={idx}
                  to={policy.link}
                  aria-label={`View ${policy.name}`}
                  className="p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg hover:scale-[1.02] transform transition duration-300 bg-white flex flex-col items-center justify-center text-center"
                >
                  <h3 className="text-lg font-medium text-gray-800 hover:text-blue-400 transition duration-300">
                    {policy.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{policy.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
     }
