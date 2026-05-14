import type { DraftCertificateInput } from "@/types/certificate";

export function serializeCertificatePayload(input: DraftCertificateInput & { certId: string }) {
  return [
    input.certId,
    input.recipientName.trim(),
    input.courseName.trim(),
    input.institutionName.trim(),
    input.institutionCode.trim(),
    input.issueDate,
    input.expiryDate ?? "NA",
    input.grade.trim(),
    input.issuedBy.trim(),
    input.note?.trim() ?? "NA"
  ].join("|");
}

export async function generateCertificateHash(
  input: string | (DraftCertificateInput & { certId: string })
) {
  const payload =
    typeof input === "string" ? input : serializeCertificatePayload(input);

  const encoded = new TextEncoder().encode(payload);

  if (globalThis.crypto?.subtle) {
    const digest = await globalThis.crypto.subtle.digest("SHA-256", encoded);
    return Array.from(new Uint8Array(digest))
      .map((value) => value.toString(16).padStart(2, "0"))
      .join("");
  }

  const { createHash } = await import("crypto");
  return createHash("sha256").update(payload).digest("hex");
}

