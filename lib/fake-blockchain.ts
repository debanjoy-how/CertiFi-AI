import { DEMO_ADMIN } from "@/lib/constants";
import { certificates } from "@/lib/mock-data";
import { generateCertificateHash } from "@/lib/hash";
import { buildVerificationUrl } from "@/lib/qr";
import type { Certificate, DraftCertificateInput } from "@/types/certificate";
import type { VerificationResult } from "@/types/verification";

export function generateFakeTxHash(seed: string) {
  const source = `${seed}${seed.split("").reverse().join("")}`;
  const hex = Array.from({ length: 64 }, (_, index) => {
    const code = source.charCodeAt(index % source.length) + index;
    return (code % 16).toString(16);
  }).join("");

  return `0x${hex}`;
}

export async function mockIssueCertificate(input: DraftCertificateInput): Promise<Certificate> {
  const certId = `CERT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const storedHash = await generateCertificateHash({ ...input, certId });

  // TODO: Replace mock issuance with a secured API route backed by Supabase inserts.
  return {
    id: `mock-${certId.toLowerCase()}`,
    certId,
    recipientName: input.recipientName,
    courseName: input.courseName,
    institutionName: input.institutionName,
    institutionCode: input.institutionCode,
    issuedAt: input.issueDate,
    expiryDate: input.expiryDate,
    grade: input.grade,
    status: "ACTIVE",
    tags: ["Freshly Issued", "Hackathon Demo"],
    skills: ["QR Verification", "Immutable Log"],
    storedHash,
    currentHash: storedHash,
    qrValue: buildVerificationUrl(certId),
    txHash: generateFakeTxHash(certId),
    verificationCount: 0,
    issuerEmail: DEMO_ADMIN.email,
    generatedBy: input.issuedBy,
    aiRiskScore: 2,
    note: input.note
  };
}

export async function mockVerifyCertificate(certId: string): Promise<VerificationResult> {
  const certificate = certificates.find(
    (item) => item.certId.toLowerCase() === certId.toLowerCase()
  );

  // TODO: Replace in-memory lookups with a public Supabase query or server action.
  if (!certificate) {
    return {
      state: "NOT_FOUND",
      message: "We could not locate that certificate in the registry snapshot.",
      auditTrail: [
        "Lookup request reached the mock verification service.",
        "No matching certificate ID was found in the seeded dataset.",
        "A NOT_FOUND event would be written to verification_logs in production."
      ]
    };
  }

  const state =
    certificate.status === "REVOKED"
      ? "TAMPERED"
      : certificate.storedHash === certificate.currentHash
        ? "VALID"
        : "TAMPERED";

  return {
    state,
    message:
      state === "VALID"
        ? "Hash comparison successful. The certificate content is intact."
        : "Hash mismatch detected. This certificate should be reviewed before trust is granted.",
    certificate,
    storedHash: certificate.storedHash,
    currentHash: certificate.currentHash,
    blockchainAnchor: certificate.txHash,
    auditTrail: [
      "Certificate record fetched from mock registry.",
      "Stored hash compared against the current computed hash snapshot.",
      "Blockchain anchor is currently simulated for hackathon demos."
    ]
  };
}

export async function mockLogin(email: string, password: string) {
  // TODO: Swap this mock with Supabase Auth when real session handling is added.
  const authenticated =
    email.toLowerCase() === DEMO_ADMIN.email.toLowerCase() &&
    password === DEMO_ADMIN.password;

  return {
    authenticated,
    user: authenticated
      ? {
          name: "Asha Registrar",
          email: DEMO_ADMIN.email,
          role: "Institution Admin"
        }
      : null
  };
}

