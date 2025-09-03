import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Billing() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Payment & Billing Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' Payment & Billing Policy explains subscriptions, invoices, refunds, and one-time purchases."
        />
        <meta
          name="keywords"
          content="Kerliix, billing, payments, subscriptions, invoices, refunds"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/billing" />

        {/* Open Graph */}
        <meta property="og:title" content="Payment & Billing Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Read Kerliix Technologies' Billing Policy to understand how payments, invoices, and subscriptions are handled."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/billing" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Payment & Billing Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix Technologies' Billing Policy covers subscriptions, refunds, and invoices."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PaymentChargeSpecification",
            "name": "Payment & Billing Policy",
            "url": "https://policies.kerliix.com/billing",
            "description": "Kerliix Technologies' Billing Policy explains subscriptions, payments, invoices, and refunds.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Payment & Billing Policy</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Subscription Billing</h2>
          <p className="text-white/90">
            Subscriptions are billed on a recurring basis as specified in your plan (monthly, yearly, or otherwise). You
            authorize Kerliix to automatically charge your payment method.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. One-Time Purchases</h2>
          <p className="text-white/90">
            One-time purchases, including add-ons or upgrades, are billed immediately upon confirmation of purchase.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Invoices</h2>
          <p className="text-white/90">
            All customers will have access to invoices and receipts in their account dashboard. Invoices include
            applicable taxes and payment details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Refunds</h2>
          <p className="text-white/90">
            Refunds are subject to our Refund Policy. Some services may not be eligible for refunds after use or
            activation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Failed Payments</h2>
          <p className="text-white/90">
            If a payment fails, we may suspend or restrict access to services until the balance is settled. Multiple
            failed attempts may lead to termination of your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Contact</h2>
          <p className="text-white/90">For billing inquiries, contact us at:</p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:billing@kerliix.com" className="text-blue-400 hover:underline">billing@kerliix.com</a></li>
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
        }
