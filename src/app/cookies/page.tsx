import { buildMetadata } from "@/lib/seo";
import { LegalShell } from "@/components/marketing/legal-shell";
import { SITE } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How Exaltis uses cookies and similar technologies on exaltis.org.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalShell title="Cookie Policy" updated="May 1, 2026">
      <p>
        This Cookie Policy explains how Exaltis ({SITE.company}) uses cookies and similar
        technologies on exaltis.org and within the Exaltis platform.
      </p>

      <h2>What are cookies?</h2>
      <p>Cookies are small text files stored on your device by your web browser. They allow websites to remember information about your visit.</p>

      <h2>Types of cookies we use</h2>
      <ul>
        <li><strong>Strictly necessary</strong>: required for the site to function (authentication, security, load balancing).</li>
        <li><strong>Functional</strong>: remember preferences such as dark mode and language.</li>
        <li><strong>Analytics</strong>: measure how visitors use the site so we can improve it.</li>
        <li><strong>Marketing</strong>: used only with consent; help us measure campaign effectiveness.</li>
      </ul>

      <h2>Managing cookies</h2>
      <p>You can manage your cookie preferences through the on-site banner or your browser settings. Disabling some cookies may affect site functionality.</p>

      <h2>Contact</h2>
      <p>Questions? Contact <a href="mailto:privacy@exaltis.org">privacy@exaltis.org</a>.</p>
    </LegalShell>
  );
}
