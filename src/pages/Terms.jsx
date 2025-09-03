import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Terms of Service | Kerliix Technologies</title>
        <meta  
          name="description"  
          content="Read Kerliix Technologies' Terms of Service. Learn the rules for using our website, services, and platforms, ensuring transparency and safety."  
        />
        <meta  
          name="keywords"  
          content="Kerliix, terms of service, rules, account responsibilities, intellectual property, user obligations"  
        />
        <meta name="author" content="Kerliix Technologies" />
        <link rel="canonical" href="https://policies.kerliix.com/terms" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Terms of Service | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix Technologies Terms of Service explain how you can safely and responsibly use our services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://policies.kerliix.com/terms" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix Technologies Terms of Service explain how you can safely and responsibly use our services."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TermsOfService",
            "name": "Terms of Service",
            "url": "https://policies.kerliix.com/terms",
            "description": "Kerliix Technologies Terms of Service explain how you can safely and responsibly use our website and services.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Terms of Service</h1>
        <p className="mb-8 text-white/90">Last updated: September 03, 2025</p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Eligibility</h2>
          <p className="text-white/90">
            You must be at least 18 years old (or the legal age in your jurisdiction) to use our Services. Users under 13 are subject to our <a href="https://policies.kerliix.com/coppa" className="text-blue-400 hover:underline">Children’s Privacy & Age Restriction Policy</a>.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Account Registration</h2>
          <p className="text-white/90">
            To access certain Services, you may need to create an account. You agree to provide accurate, complete, and up-to-date information. You are responsible for maintaining the security of your account credentials and all activity under your account.  
            See our <a href="https://policies.kerliix.com/eula" className="text-blue-400 hover:underline">End User License Agreement (EULA)</a> for more details.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Use of Services</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Use our Services lawfully and in accordance with our <a href="https://policies.kerliix.com/aup" className="text-blue-400 hover:underline">Acceptable Use Policy</a>.</li>
            <li>Comply with all applicable laws, regulations, and these Terms.</li>
            <li>Do not interfere with or disrupt the Services or its infrastructure.</li>
            <li>Do not reverse-engineer, copy, or misuse any part of our Services or content.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
          <p className="text-white/90">
            All content, logos, trademarks, and materials provided through our Services are owned by Kerliix or our licensors. Users retain ownership of their content but grant Kerliix a license to use it as necessary to provide Services.  
            See our <a href="https://policies.kerliix.com/dmca" className="text-blue-400 hover:underline">DMCA / Copyright Policy</a> and <a href="https://policies.kerliix.com/content" className="text-blue-400 hover:underline">User Content & Licensing Policy</a> for details.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Privacy & Data</h2>
          <p className="text-white/90">
            Your use of our Services is governed by our <a href="https://policies.kerliix.com/privacy" className="text-blue-400 hover:underline">Privacy Policy</a>, <a href="https://policies.kerliix.com/cookies" className="text-blue-400 hover:underline">Cookie Policy</a>, and other data-related policies:  
            <br/>- <a href="https://policies.kerliix.com/gdpr" className="text-blue-400 hover:underline">Data Processing / GDPR Policy</a>  
            <br/>- <a href="https://policies.kerliix.com/data-retention" className="text-blue-400 hover:underline">Data Retention & Deletion Policy</a>  
            <br/>- <a href="https://policies.kerliix.com/security" className="text-blue-400 hover:underline">Security Policy</a>
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Payments, Refunds & Billing</h2>
          <p className="text-white/90">
            All payment terms, billing cycles, and refunds are governed by our <a href="https://policies.kerliix.com/billing" className="text-blue-400 hover:underline">Payment & Billing Policy</a> and <a href="https://policies.kerliix.com/refund" className="text-blue-400 hover:underline">Refund & Cancellation Policy</a>.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Third-Party Services</h2>
          <p className="text-white/90">
            Our Services may link to third-party websites or services. Kerliix is not responsible for the content, policies, or practices of third parties. Use third-party services at your own risk.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Disclaimers</h2>
          <p className="text-white/90">
            Our Services are provided “as is” and “as available”. Kerliix disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. See our <a href="https://policies.kerliix.com/disclaimer" className="text-blue-400 hover:underline">Disclaimer</a> for full details.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">9. Limitation of Liability</h2>
          <p className="text-white/90">
            To the maximum extent permitted by law, Kerliix and its affiliates shall not be liable for indirect, incidental, special, or consequential damages arising from your use of the Services.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">10. Indemnification</h2>
          <p className="text-white/90">
            You agree to indemnify, defend, and hold harmless Kerliix and its affiliates from any claims, losses, or damages arising from your use of the Services or violation of these Terms.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">11. Termination</h2>
          <p className="text-white/90">
            Kerliix may suspend or terminate your access at any time for any reason, including violation of these Terms or related policies.
          </p>
        </section>

        {/* Section 12 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">12. Community & Trust</h2>
          <p className="text-white/90">
            Users must comply with our community-related policies:  
            <br/>- <a href="https://policies.kerliix.com/community" className="text-blue-400 hover:underline">Community Guidelines</a>  
            <br/>- <a href="https://policies.kerliix.com/moderation" className="text-blue-400 hover:underline">Moderator & Enforcement Policy</a>  
            <br/>- <a href="https://policies.kerliix.com/inclusion" className="text-blue-400 hover:underline">Equality, Diversity & Inclusion Statement</a>  
            <br/>- <a href="https://policies.kerliix.com/transparency" className="text-blue-400 hover:underline">Transparency Report</a>
          </p>
        </section>

        {/* Section 13 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">13. Business & Partnerships</h2>
          <p className="text-white/90">
            Partnered activities, open-source contributions, and advertising are governed by:  
            <br/>- <a href="https://policies.kerliix.com/partnerships" className="text-blue-400 hover:underline">Partnership & Integration Policy</a>  
            <br/>- <a href="https://policies.kerliix.com/opensource" className="text-blue-400 hover:underline">Open Source Contribution Policy</a>  
            <br/>- <a href="https://policies.kerliix.com/advertising" className="text-blue-400 hover:underline">Advertising & Sponsorship Policy</a>
          </p>
        </section>

        {/* Section 14 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">14. Governing Law</h2>
          <p className="text-white/90">
            These Terms are governed by the laws of [Insert Jurisdiction, e.g., Uganda], without regard to conflict of law principles.
          </p>
        </section>

        {/* Section 15 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">15. Changes to Terms</h2>
          <p className="text-white/90">
            Kerliix may update these Terms from time to time. Continued use of Services after updates constitutes acceptance.
          </p>
        </section>

        {/* Section 16 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">16. Contact Us</h2>
          <p className="text-white/90">
            For questions regarding these Terms or any Kerliix policy, contact us at:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
            <li>Email: <a href="mailto:info@kerliix.com" className="text-blue-400 hover:underline">info@kerliix.com</a></li>
            <li>Policies Hub: <a href="https://policies.kerliix.com" className="text-blue-400 hover:underline">https://policies.kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
      }
