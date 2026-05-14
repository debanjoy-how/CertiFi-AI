import type { Certificate, VerificationState } from "@/types/certificate";

export type MetricIcon =
  | "shield"
  | "scan"
  | "alert"
  | "building"
  | "sparkles"
  | "clock";

export interface VerificationLog {
  id: string;
  certId: string;
  result: VerificationState;
  verifier: string;
  location: string;
  source: "Dashboard" | "Public Portal" | "QR Scan";
  verifiedAt: string;
}

export interface VerificationResult {
  state: VerificationState;
  message: string;
  certificate?: Certificate;
  storedHash?: string;
  currentHash?: string;
  blockchainAnchor?: string;
  auditTrail: string[];
}

export interface DashboardMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  caption: string;
  icon: MetricIcon;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  tone: "default" | "success" | "warning" | "danger";
}

export interface InstitutionSettings {
  institutionName: string;
  supportEmail: string;
  website: string;
  brandingAccent: string;
  autoIssueEmails: boolean;
  requireTwoFactor: boolean;
  allowPublicVerification: boolean;
}

