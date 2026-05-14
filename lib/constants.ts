export const APP_NAME = "CertiChain AI";
export const TAGLINE = "AI-powered tamper-proof certificate verification system";

export const DEMO_ADMIN = {
  email: "admin@certichain.ai",
  password: "Demo@12345"
};

export const MARKETING_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#proof", label: "Proof Layer" }
];

export const APP_NAVIGATION = [
  { href: "/dashboard", label: "Dashboard", icon: "layout" },
  { href: "/issue", label: "Issue", icon: "plus" },
  { href: "/verify", label: "Verify", icon: "shield" },
  { href: "/certificates", label: "Certificates", icon: "files" },
  { href: "/settings", label: "Settings", icon: "settings" }
] as const;

export const LANDING_FEATURES = [
  {
    title: "Tamper Detection",
    description:
      "Every certificate snapshot gets a deterministic SHA-256 fingerprint so forged edits light up instantly."
  },
  {
    title: "QR-first Verification",
    description:
      "Shareable certificate links and QR experiences make public verification feel effortless during demos."
  },
  {
    title: "Blockchain-ready Logs",
    description:
      "Starter hooks simulate chain anchoring today and leave clear TODO paths for future on-chain proofs."
  }
];

export const HOW_IT_WORKS = [
  "Issue a certificate from a guided admin flow.",
  "Generate a fingerprint, QR destination, and blockchain-style anchor.",
  "Verify any certificate in seconds from a public lookup page."
];

export const VERIFICATION_COPY = {
  VALID: {
    title: "Certificate Verified",
    description: "The current certificate snapshot matches the immutable reference hash."
  },
  TAMPERED: {
    title: "Tampering Detected",
    description: "One or more certificate fields were changed after issuance."
  },
  NOT_FOUND: {
    title: "Certificate Not Found",
    description: "No record matched this certificate ID in the current registry."
  }
} as const;

