import { buildMetadata } from "@/lib/seo";
import { LegalShell } from "@/components/marketing/legal-shell";
import { SITE } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `Exaltis Terms of Service — the agreement between you and ${SITE.company} for use of the Exaltis platform.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="May 1, 2026">
      <p>
        These Terms of Service ("Terms") govern your access to and use of the Exaltis
        platform, software, and services ("Service"), provided by {SITE.company} ("we",
        "us"). By accessing or using the Service you agree to be bound by these Terms.
      </p>

      <h2>The service</h2>
      <p>Exaltis is a software-as-a-service platform for ground transportation operators, including reservations, dispatching, fleet management, billing, analytics, and AI automation features.</p>

      <h2>Accounts</h2>
      <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity occurring under your account. You must promptly notify us of any unauthorized use.</p>

      <h2>Subscriptions and billing</h2>
      <ul>
        <li>Plans are billed in advance on a monthly or annual basis.</li>
        <li>Free trials convert to paid subscriptions unless cancelled before trial end.</li>
        <li>Stripe processes all payments. Fees are non-refundable except where required by law.</li>
        <li>You may cancel at any time; cancellation takes effect at the end of the then-current billing period.</li>
      </ul>

      <h2>Acceptable use</h2>
      <p>You agree not to (a) reverse engineer the Service, (b) use it to violate laws or third-party rights, (c) attempt to interfere with security features, (d) resell or sublicense without authorization.</p>

      <h2>Customer data</h2>
      <p>You retain all rights to data you upload to the Service ("Customer Data"). You grant us a limited license to process Customer Data solely to provide the Service.</p>

      <h2>AI features</h2>
      <p>Exaltis includes AI features ("AI Output"). AI Output is generated based on inputs you provide and may not be accurate. You are responsible for reviewing AI Output before using it in business operations. We do not use Customer Data to train foundation models without your written consent.</p>

      <h2>Confidentiality</h2>
      <p>Each party agrees to protect the other party's confidential information using no less than reasonable care.</p>

      <h2>Disclaimer of warranties</h2>
      <p>The Service is provided "as is" and "as available". To the maximum extent permitted by law, we disclaim all warranties, express or implied.</p>

      <h2>Limitation of liability</h2>
      <p>To the maximum extent permitted by law, our aggregate liability shall not exceed the fees paid to us in the twelve months preceding the event giving rise to the claim.</p>

      <h2>Governing law</h2>
      <p>These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict-of-laws principles.</p>

      <h2>Contact</h2>
      <p>For questions about these Terms, contact us at <a href="mailto:legal@exaltis.org">legal@exaltis.org</a>. Exaltis is provided by {SITE.company}.</p>
    </LegalShell>
  );
}
