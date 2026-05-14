export type CertificateLifecycleStatus = "ACTIVE" | "UNDER_REVIEW" | "REVOKED";
export type VerificationState = "VALID" | "TAMPERED" | "NOT_FOUND";

export interface Certificate {
  id: string;
  certId: string;
  recipientName: string;
  courseName: string;
  institutionName: string;
  institutionCode: string;
  issuedAt: string;
  expiryDate?: string;
  grade: string;
  status: CertificateLifecycleStatus;
  tags: string[];
  skills: string[];
  storedHash: string;
  currentHash: string;
  qrValue: string;
  txHash: string;
  verificationCount: number;
  lastVerifiedAt?: string;
  issuerEmail: string;
  generatedBy: string;
  aiRiskScore: number;
  note?: string;
}

export interface DraftCertificateInput {
  recipientName: string;
  courseName: string;
  institutionName: string;
  institutionCode: string;
  issueDate: string;
  expiryDate?: string;
  grade: string;
  issuedBy: string;
  note?: string;
}

