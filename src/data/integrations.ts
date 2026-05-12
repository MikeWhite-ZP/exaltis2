export type Integration = {
  name: string;
  category: string;
  description: string;
};

export const INTEGRATIONS: Integration[] = [
  { name: "Stripe", category: "Payments", description: "Cards, ACH, wallets, payouts, and Stripe Tax." },
  { name: "QuickBooks Online", category: "Accounting", description: "Invoices, payments, and reconciliation." },
  { name: "Xero", category: "Accounting", description: "Two-way sync for invoicing and bills." },
  { name: "Salesforce", category: "CRM", description: "Bi-directional sync of accounts, contacts, and opportunities." },
  { name: "HubSpot", category: "CRM", description: "Marketing automation and lead routing." },
  { name: "Google Workspace", category: "Productivity", description: "SSO, calendar holds, and contact sync." },
  { name: "Microsoft 365", category: "Productivity", description: "SSO, Outlook calendar, and Teams notifications." },
  { name: "Twilio", category: "Messaging", description: "Voice, SMS, WhatsApp, and verified sender." },
  { name: "FlightStats / FlightAware", category: "Flight data", description: "Real-time flight tracking and ETA-aware dispatch." },
  { name: "Slack", category: "Comms", description: "Operational alerts and dispatch escalations." },
  { name: "Zapier", category: "Automation", description: "5,000+ apps via no-code workflows." },
  { name: "Make", category: "Automation", description: "Visual scenario builder for advanced ops." },
  { name: "Apple Pay & Google Pay", category: "Payments", description: "One-tap checkout on the booking site." },
  { name: "Tookan / Onfleet", category: "Logistics", description: "Shuttle and group movement integrations." },
  { name: "Segment", category: "Data", description: "Stream events to your warehouse and BI." },
  { name: "Snowflake", category: "Data warehouse", description: "Direct sync of operations, revenue, and CX data." },
  { name: "PagerDuty", category: "Reliability", description: "On-call alerts for ops incidents and SLA risks." },
  { name: "DocuSign", category: "Legal", description: "Charter agreements and corporate contracts." },
];
