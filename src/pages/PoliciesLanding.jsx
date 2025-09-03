import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const policies = [
  { name: "Terms of Service", link: "/terms" },
  { name: "Privacy Policy", link: "/privacy" },
  { name: "Refund & Cancellation Policy", link: "/refund" },
  { name: "Cookie Policy", link: "/cookies" },
  { name: "Acceptable Use Policy", link: "/aup" },
  { name: "Security Policy", link: "/security" },
  { name: "Data Processing / GDPR Policy", link: "/gdpr" },
  { name: "DMCA / Copyright Policy", link: "/dmca" },
  { name: "Community Guidelines", link: "/community" },
  { name: "Accessibility Statement", link: "/accessibility" },
  { name: "Disclaimer", link: "/disclaimer" },
];

export default function PoliciesLanding() {
  useEffect(() => {
    document.title = "Policies & Legal Information – Kerliix Technologies";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-6 bg-gray-900">
      {/* Hero Section */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Policies & Legal Information
        </h1>
        <p className="text-lg text-gray-300">
          Stay informed about Kerliix Technologies’ commitments to safety,
          transparency, and compliance. Explore our policies below.
        </p>
      </div>

      {/* Grid of Policies */}
      <main className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {policies.map((policy, idx) => (
          <Link
            key={idx}
            to={policy.link}
            aria-label={`View ${policy.name}`}
            className="p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg hover:scale-[1.02] transform transition duration-300 bg-white flex items-center justify-center text-center"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {policy.name}
            </h2>
          </Link>
        ))}
      </main>
    </div>
  );
}
