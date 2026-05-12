import { buildMetadata } from "@/lib/seo";
import { LegalShell } from "@/components/marketing/legal-shell";
import { SITE } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Exaltis privacy policy — how ${SITE.company} collects, uses, and protects personal data.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="May 1, 2026">
      <p>
        This Privacy Policy describes how Exaltis ("Exaltis", "we", "us") — a SaaS product
        provided by {SITE.company} — collects, uses, and shares personal information when
        you visit our website or use our services.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Account information: name, email, phone, company, role.</li>
        <li>Billing information: name, billing address, last four digits of payment method (processed by Stripe; we do not store full card numbers).</li>
        <li>Service usage data: pages viewed, features used, log files, device data.</li>
        <li>Operational data uploaded by customers (e.g., trip records, passenger details) processed strictly on customers' behalf.</li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To provide and improve our services.</li>
        <li>To process billing and prevent fraud.</li>
        <li>To send service-related communications.</li>
        <li>To meet legal and regulatory obligations.</li>
      </ul>

      <h2>Legal bases (GDPR)</h2>
      <p>
        Where the GDPR applies, we rely on (a) performance of contract, (b) legitimate
        interest, (c) consent for marketing communications, and (d) compliance with legal
        obligations.
      </p>

      <h2>Sharing</h2>
      <p>We share information with sub-processors who help us deliver the service (Stripe, AWS, Google Cloud, transactional email providers). We do not sell personal data.</p>

      <h2>Data retention</h2>
      <p>We retain personal data for as long as your account is active and for as long as legally required thereafter. Customer-uploaded data may be exported and deleted on request.</p>

      <h2>Your rights</h2>
      <ul>
        <li>Access, correct, or delete your information.</li>
        <li>Object to or restrict certain processing.</li>
        <li>Data portability.</li>
        <li>Withdraw consent at any time.</li>
      </ul>

      <h2>Security</h2>
      <p>Exaltis is SOC 2 Type II audited. Data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Access is role-based, logged, and audited.</p>

      <h2>International transfers</h2>
      <p>We use Standard Contractual Clauses where applicable for transfers outside of the European Economic Area.</p>

      <h2>Contact</h2>
      <p>
        For privacy questions or requests, contact us at{" "}
        <a href="mailto:privacy@exaltis.org">privacy@exaltis.org</a>. Exaltis is provided
        by {SITE.company}.
      </p>
    </LegalShell>
  );
}
