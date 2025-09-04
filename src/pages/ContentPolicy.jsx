import React from "react";
import { Helmet } from "react-helmet-async";

export default function ContentPolicy() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>User Content & Licensing Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Kerliix Technologies' User Content & Licensing Policy explains how user-generated content is handled, licensed, and protected."
        />
        <meta
          name="keywords"
          content="Kerliix, content policy, user content, licensing, copyright, intellectual property"
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/content" />

        {/* Open Graph */}
        <meta property="og:title" content="User Content & Licensing Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Learn how Kerliix Technologies manages user-generated content, licenses, and intellectual property rights."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />
        <meta property="og:url" content="https://policies.kerliix.com/content" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "name": "User Content & Licensing Policy",
            "url": "https://policies.kerliix.com/content",
            "publisher": {
              "@type": "Organization",
              "name": "Kerliix Technologies",
              "logo": {
                "@type": "ImageObject",
                "url": "https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png",
              },
            },
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">
          User Content & Licensing Policy
        </h1>
        <p className="mb-8 text-white/90">Last updated: September 04, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Ownership of Content</h2>
          <p className="text-white/90">
            You retain ownership of the content you create and share on Kerliix. By posting content, you
            confirm that you have the rights to do so and that your content does not violate the rights of others.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Licensing to Kerliix</h2>
          <p className="text-white/90">
            By submitting, posting, or displaying content on Kerliix, you grant us a worldwide,
            non-exclusive, royalty-free, transferable license to use, reproduce, distribute, and display
            your content solely for the purpose of operating, promoting, and improving our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>You are responsible for the legality and accuracy of the content you upload.</li>
            <li>You must not post content that infringes on intellectual property, privacy, or publicity rights.</li>
            <li>You agree not to upload malicious, harmful, or illegal content.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Enforcement</h2>
          <p className="text-white/90">
            Violations of this policy may result in content removal, account suspension, or legal action in
            accordance with our{" "}
            <a
              href="https://policies.kerliix.com/aup"
              className="text-blue-400 hover:underline"
            >
              Acceptable Use Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.kerliix.com/terms"
              className="text-blue-400 hover:underline"
            >
              Terms of Service
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
          <p className="text-white/90">
            For questions or concerns about this policy, please contact us:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>
              Email:{" "}
              <a
                href="mailto:content@kerliix.com"
                className="text-blue-400 hover:underline"
              >
                content@kerliix.com
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:legal@kerliix.com"
                className="text-blue-400 hover:underline"
              >
                legal@kerliix.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

