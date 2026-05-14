import type { Certificate } from "@/types/certificate";
import type {
  ActivityItem,
  DashboardMetric,
  InstitutionSettings,
  VerificationLog
} from "@/types/verification";
import { buildVerificationUrl } from "@/lib/qr";

function generateMockTxHash(seed: string) {
  const source = `${seed}${seed.split("").reverse().join("")}`;
  const hex = Array.from({ length: 64 }, (_, index) => {
    const code = source.charCodeAt(index % source.length) + index;
    return (code % 16).toString(16);
  }).join("");

  return `0x${hex}`;
}

const hashA = "a87c7f775824d7926b58f9ea5f5a87c4d48f8574f41dfbcbef0d50f783f13d41";
const hashB = "be230ca6d3eb92e0260044815a75d7e4ddf90a1ec8b65fa9a7342ddfce3a804f";
const hashC = "54fd8be1f5cf2cb8c1b2b98158a90d6bbd0a9fe2de5eb3772d6f7d7f25bbca1a";
const hashD = "8b2c1a0e7df9a30569d84b5e36c0af1a19c2288ac6120ef95dd2eb6428f1d7ae";
const hashE = "cff8941f45d25120c286c390520ca3bf8cb53faf3fbbd0650df45c9b5f9de1e0";
const hashTampered = "ffe8941f45d25120c286c390520ca3bf8cb53faf3fbbd0650df45c9b5f9de1e0";

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    certId: "CERT-2026-1041",
    recipientName: "Rahul Sharma",
    courseName: "AI & ML Bootcamp",
    institutionName: "MechaByte Academy",
    institutionCode: "MBA-IND",
    issuedAt: "2026-04-12",
    grade: "Distinction",
    status: "ACTIVE",
    tags: ["Priority Demo", "Investor Ready"],
    skills: ["Machine Learning", "Python", "MLOps"],
    storedHash: hashA,
    currentHash: hashA,
    qrValue: buildVerificationUrl("CERT-2026-1041"),
    txHash: generateMockTxHash("CERT-2026-1041"),
    verificationCount: 132,
    lastVerifiedAt: "2026-05-13T13:20:00.000Z",
    issuerEmail: "admin@mechabyte.edu",
    generatedBy: "Asha Registrar",
    aiRiskScore: 1
  },
  {
    id: "cert-2",
    certId: "CERT-2026-1042",
    recipientName: "Priya Nair",
    courseName: "Cybersecurity Analyst Program",
    institutionName: "MechaByte Academy",
    institutionCode: "MBA-IND",
    issuedAt: "2026-03-28",
    grade: "A+",
    status: "ACTIVE",
    tags: ["High Verification Volume"],
    skills: ["Network Security", "SIEM", "Threat Hunting"],
    storedHash: hashB,
    currentHash: hashB,
    qrValue: buildVerificationUrl("CERT-2026-1042"),
    txHash: generateMockTxHash("CERT-2026-1042"),
    verificationCount: 96,
    lastVerifiedAt: "2026-05-12T10:10:00.000Z",
    issuerEmail: "admin@mechabyte.edu",
    generatedBy: "Neeraj Ops",
    aiRiskScore: 3
  },
  {
    id: "cert-3",
    certId: "CERT-2026-1043",
    recipientName: "Sneha Verma",
    courseName: "Full Stack Product Engineering",
    institutionName: "CertiChain Labs",
    institutionCode: "CCL-IND",
    issuedAt: "2026-02-19",
    grade: "Outstanding",
    status: "UNDER_REVIEW",
    tags: ["Tamper Test"],
    skills: ["React", "Node.js", "System Design"],
    storedHash: hashC,
    currentHash: hashTampered,
    qrValue: buildVerificationUrl("CERT-2026-1043"),
    txHash: generateMockTxHash("CERT-2026-1043"),
    verificationCount: 41,
    lastVerifiedAt: "2026-05-11T06:25:00.000Z",
    issuerEmail: "registrar@certichain.ai",
    generatedBy: "Fraud Monitoring Bot",
    aiRiskScore: 91,
    note: "Public demo tamper scenario seeded for judge walkthrough."
  },
  {
    id: "cert-4",
    certId: "CERT-2026-1044",
    recipientName: "Arjun Patel",
    courseName: "Cloud Foundations Intensive",
    institutionName: "Northstar Skills",
    institutionCode: "NSS-IND",
    issuedAt: "2026-01-08",
    grade: "Merit",
    status: "REVOKED",
    tags: ["Revoked"],
    skills: ["AWS", "DevOps", "Infrastructure"],
    storedHash: hashD,
    currentHash: hashD,
    qrValue: buildVerificationUrl("CERT-2026-1044"),
    txHash: generateMockTxHash("CERT-2026-1044"),
    verificationCount: 12,
    lastVerifiedAt: "2026-05-10T17:45:00.000Z",
    issuerEmail: "ops@northstarskills.com",
    generatedBy: "Admin Console",
    aiRiskScore: 55,
    note: "Revoked after duplicate export request review."
  },
  {
    id: "cert-5",
    certId: "CERT-2026-1045",
    recipientName: "Ishita Sen",
    courseName: "Data Visualization Fellowship",
    institutionName: "Aurora Talent Hub",
    institutionCode: "ATH-IN",
    issuedAt: "2026-05-01",
    grade: "A",
    status: "ACTIVE",
    tags: ["Fresh Issue"],
    skills: ["Tableau", "Storytelling", "Dashboards"],
    storedHash: hashE,
    currentHash: hashE,
    qrValue: buildVerificationUrl("CERT-2026-1045"),
    txHash: generateMockTxHash("CERT-2026-1045"),
    verificationCount: 18,
    lastVerifiedAt: "2026-05-13T21:00:00.000Z",
    issuerEmail: "hello@auroratalenthub.com",
    generatedBy: "Batch Issuer",
    aiRiskScore: 4
  }
];

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: "issued",
    title: "Certificates Issued",
    value: "1,284",
    change: "+18.2%",
    caption: "vs last 30 days",
    icon: "shield"
  },
  {
    id: "verifications",
    title: "Successful Verifications",
    value: "982",
    change: "+26.4%",
    caption: "public checks completed",
    icon: "scan"
  },
  {
    id: "tampered",
    title: "Tamper Alerts",
    value: "14",
    change: "-3 false positives",
    caption: "risk cases isolated",
    icon: "alert"
  },
  {
    id: "institutions",
    title: "Active Institutions",
    value: "27",
    change: "+5 new this month",
    caption: "multi-campus rollouts",
    icon: "building"
  }
];

export const landingStats: DashboardMetric[] = [
  {
    id: "trust",
    title: "Integrity Coverage",
    value: "99.98%",
    change: "demo-ready",
    caption: "certificate snapshots protected",
    icon: "sparkles"
  },
  {
    id: "speed",
    title: "Verification Speed",
    value: "3.2 sec",
    change: "public lookup",
    caption: "from QR scan to verdict",
    icon: "clock"
  },
  {
    id: "scale",
    title: "Registry Capacity",
    value: "50K+",
    change: "free-tier friendly",
    caption: "starter records supported",
    icon: "shield"
  }
];

export const verificationLogs: VerificationLog[] = [
  {
    id: "log-1",
    certId: "CERT-2026-1041",
    result: "VALID",
    verifier: "TCS Hiring Team",
    location: "Bengaluru, IN",
    source: "QR Scan",
    verifiedAt: "2026-05-13T13:20:00.000Z"
  },
  {
    id: "log-2",
    certId: "CERT-2026-1043",
    result: "TAMPERED",
    verifier: "Startup Inc HR",
    location: "Remote",
    source: "Public Portal",
    verifiedAt: "2026-05-11T06:25:00.000Z"
  },
  {
    id: "log-3",
    certId: "CERT-2026-1045",
    result: "VALID",
    verifier: "Campus Placement Cell",
    location: "Kolkata, IN",
    source: "Dashboard",
    verifiedAt: "2026-05-13T21:00:00.000Z"
  }
];

export const recentActivity: ActivityItem[] = [
  {
    id: "activity-1",
    title: "Tamper alert resolved",
    description: "Sneha Verma's certificate was flagged after a grade-field mismatch was detected.",
    timestamp: "2026-05-11T06:35:00.000Z",
    tone: "danger"
  },
  {
    id: "activity-2",
    title: "New institution onboarded",
    description: "Aurora Talent Hub imported its first 25 mock certificates into the registry.",
    timestamp: "2026-05-12T08:10:00.000Z",
    tone: "success"
  },
  {
    id: "activity-3",
    title: "Verification spike captured",
    description: "QR scans increased 34% after the latest placement drive showcase.",
    timestamp: "2026-05-13T19:05:00.000Z",
    tone: "warning"
  }
];

export const institutionSettings: InstitutionSettings = {
  institutionName: "MechaByte Academy",
  supportEmail: "admin@certichain.ai",
  website: "https://certichain.demo",
  brandingAccent: "#6366F1",
  autoIssueEmails: false,
  requireTwoFactor: true,
  allowPublicVerification: true
};
