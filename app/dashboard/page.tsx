import Link from "next/link";
import { ArrowRight, ShieldAlert, WandSparkles } from "lucide-react";

import { CertificateCard } from "@/components/certificate-card";
import { DashboardShell } from "@/components/dashboard-shell";
import { RecentCertificates } from "@/components/recent-certificates";
import { StatsCards } from "@/components/stats-cards";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardMetrics, certificates, recentActivity, verificationLogs } from "@/lib/mock-data";
import { formatRelativeTime } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <DashboardShell
      title="Certificate Trust Dashboard"
      subtitle="Monitor issuance health, public verification patterns, and risk signals from one premium-looking control center."
      action={
        <Button asChild>
          <Link href="/issue">
            Issue new certificate
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div className="space-y-8">
        <StatsCards metrics={dashboardMetrics} />

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <RecentCertificates certificates={certificates} />
          <Card className="mesh-border">
            <CardHeader>
              <CardTitle>Activity Feed</CardTitle>
              <CardDescription>
                Recent risk, onboarding, and verification activity around the seeded registry.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((item) => (
                <div key={item.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-400">{item.description}</p>
                    </div>
                    <span
                      className={`mt-1 h-2.5 w-2.5 rounded-full ${
                        item.tone === "success"
                          ? "bg-emerald-400"
                          : item.tone === "warning"
                            ? "bg-amber-400"
                            : item.tone === "danger"
                              ? "bg-rose-400"
                              : "bg-slate-400"
                      }`}
                    />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                    {formatRelativeTime(item.timestamp)}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {certificates.slice(0, 2).map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>

          <Card className="mesh-border">
            <CardHeader>
              <CardTitle>Verification Intelligence</CardTitle>
              <CardDescription>
                Mock analytics designed to make the dashboard feel used and insightful during demos.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-[1.75rem] border border-primary/20 bg-primary/10 p-5">
                <div className="flex items-center gap-3">
                  <WandSparkles className="h-5 w-5 text-indigo-200" />
                  <p className="font-medium text-white">AI risk sweep</p>
                </div>
                <p className="mt-3 text-sm text-indigo-100/80">
                  3 certificates are flagged for visual anomaly review. This is a placeholder panel
                  for future Gemini or OCR-based fraud scoring.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-rose-500/20 bg-rose-500/10 p-5">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="h-5 w-5 text-rose-300" />
                  <p className="font-medium text-white">Latest tamper event</p>
                </div>
                <p className="mt-2 text-sm text-rose-100/80">
                  {verificationLogs[1].verifier} triggered a tamper alert while reviewing{" "}
                  {verificationLogs[1].certId}.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}

