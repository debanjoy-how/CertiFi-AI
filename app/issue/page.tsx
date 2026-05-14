import Link from "next/link";

import { CertificateForm } from "@/components/certificate-form";
import { DashboardShell } from "@/components/dashboard-shell";
import { Button } from "@/components/ui/button";

export default function IssuePage() {
  return (
    <DashboardShell
      title="Issue New Certificate"
      subtitle="Capture recipient details, generate a trust fingerprint, and preview the public verification route before real backend wiring."
      action={
        <Button variant="secondary" asChild>
          <Link href="/certificates">Review issued certificates</Link>
        </Button>
      }
    >
      <CertificateForm />
    </DashboardShell>
  );
}

