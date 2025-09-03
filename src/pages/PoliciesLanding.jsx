import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const policySections = {
  "Core Legal": [
    { name: "Terms of Service", link: "/terms" },
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Refund & Cancellation Policy", link: "/refund" },
    { name: "Cookie Policy", link: "/cookies" },
    { name: "Disclaimer", link: "/disclaimer" },
    { name: "End User License Agreement (EULA)", link: "/eula" },
    { name: "Children’s Privacy & Age Restriction Policy", link: "/coppa" },
    { name: "Payment & Billing Policy", link: "/billing" },
  ],

  "Data & Security": [
    { name: "Security Policy", link: "/security" },
    { name: "Data Processing / GDPR Policy", link: "/gdpr" },
    { name: "Data Retention & Deletion Policy", link: "/data-retention" },
    { name: "Responsible Disclosure Policy", link: "/disclosure" },
    { name: "Incident Response Policy", link: "/incident-response" },
    { name: "AI & Ethics Policy", link: "/ai-ethics" },
    { name: "Export Control & Sanctions Compliance Policy", link: "/export" },
  ],

  "Community & Trust": [
    { name: "Acceptable Use Policy", link: "/aup" },
    { name: "Community Guidelines", link: "/community" },
    { name: "Accessibility Statement", link: "/accessibility" },
    { name: "DMCA / Copyright Policy", link: "/dmca" },
    { name: "Moderator & Enforcement Policy", link: "/moderation" },
    { name: "Equality, Diversity & Inclusion Statement", link: "/inclusion" },
    { name: "Transparency Report", link: "/transparency" },
  ],

  "Business & Partnerships": [
    { name: "Partnership & Integration Policy", link: "/partnerships" },
    { name: "Open Source Contribution Policy", link: "/opensource" },
    { name: "Advertising & Sponsorship Policy", link: "/advertising" },
    { name: "User Content & Licensing Policy", link: "/content" },
  ],
};

export default function PoliciesLanding() {
  useEffect(() => {
    document.title = "Policies & Legal Information – Kerliix Technologies";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-6">
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
                  className="p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg hover:scale-[1.02] transform transition duration-300 bg-white flex items-center justify-center text-center"
                >
                  <h3 className="text-lg font-medium text-gray-800 hover:text-blue-400 transition duration-300">
                    {policy.name}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
