import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Refund() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Refund Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Read Kerliix Technologies' Refund Policy to understand eligibility, timeframes, and conditions for refunds."
        />
        <meta
          name="keywords"
          content="Kerliix, refund policy, cancellation, returns, payments"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/refund" />

        {/* Open Graph */}
        <meta property="og:title" content="Refund Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix Technologies Refund Policy explains how refunds are handled for eligible services and transactions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/refund" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Refund Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix Technologies Refund Policy explains how refunds are handled for eligible services and transactions."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RefundPolicy",
            "name": "Refund Policy",
            "url": "https://policies.kerliix.com/refund",
            "description": "Kerliix Technologies Refund Policy explains how refunds are handled for eligible services and transactions.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Refund Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Eligibility for Refunds</h2>
          <p className="text-white/90">
            Refunds may be requested for eligible services within 14 days of purchase, unless otherwise specified in service agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Non-Refundable Services</h2>
          <p className="text-white/90">
            Certain services such as domain registrations, third-party licenses, and completed consulting work are non-refundable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Refund Process</h2>
          <p className="text-white/90">
            Refunds are processed back to the original payment method within 7–14 business days after approval.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Cancellations</h2>
          <p className="text-white/90">
            Subscription services can be canceled anytime. Refunds for unused portions depend on the plan and eligibility.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
          <p className="text-white/90">
            For refund-related questions, contact us at:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
            <li>Email: <a href="mailto:billing@kerliix.com" className="text-blue-400 hover:underline">billing@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}