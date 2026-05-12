import { buildMetadata } from "@/lib/seo";
import { LegalShell } from "@/components/marketing/legal-shell";

export const metadata = buildMetadata({
  title: "Security",
  description:
    "Security, compliance, and trust at Exaltis — SOC 2 Type II, GDPR-ready, SSO, audit logs, and granular RBAC.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <LegalShell title="Security & Trust" updated="May 1, 2026">
      <p>Security is a first-class product feature at Exaltis. Below is an overview of how we protect customer data and operate the platform.</p>

      <h2>Certifications</h2>
      <ul>
        <li>SOC 2 Type II audited annually (report available under NDA).</li>
        <li>GDPR-ready, with Standard Contractual Clauses for international transfers.</li>
        <li>ISO 27001 in progress.</li>
      </ul>

      <h2>Application security</h2>
      <ul>
        <li>OAuth 2.0, SSO (SAML & OIDC), SCIM 2.0.</li>
        <li>Granular role-based access control with audit logs.</li>
        <li>Per-request authorization checks.</li>
        <li>Annual third-party penetration testing.</li>
      </ul>

      <h2>Infrastructure</h2>
      <ul>
        <li>AWS multi-region with automated failover.</li>
        <li>TLS 1.2+ in transit; AES-256 at rest.</li>
        <li>Encrypted, point-in-time database backups retained 35 days.</li>
        <li>Continuous vulnerability scanning and patch management.</li>
      </ul>

      <h2>Privacy & data handling</h2>
      <ul>
        <li>Data minimization: only what we need to deliver the Service.</li>
        <li>Customer-uploaded data is processed strictly on the customer's behalf.</li>
        <li>Data subject requests honored per GDPR/CCPA.</li>
      </ul>

      <h2>Responsible disclosure</h2>
      <p>
        Report security issues to{" "}
        <a href="mailto:security@exaltis.org">security@exaltis.org</a>. We commit to
        acknowledge within 24 hours and remediate critical issues within agreed SLAs.
      </p>
    </LegalShell>
  );
}
