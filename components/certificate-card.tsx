import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { VerificationBadge } from "@/components/verification-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Certificate } from "@/types/certificate";
import { formatDate } from "@/lib/utils";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  const state =
    certificate.status === "REVOKED"
      ? "TAMPERED"
      : certificate.storedHash === certificate.currentHash
        ? "VALID"
        : "TAMPERED";

  return (
    <Card className="mesh-border h-full overflow-hidden">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-lg">{certificate.recipientName}</CardTitle>
            <CardDescription>{certificate.courseName}</CardDescription>
          </div>
          <VerificationBadge state={state} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm">
          <div>
            <p className="text-slate-500">Certificate ID</p>
            <p className="mt-1 text-slate-200">{certificate.certId}</p>
          </div>
          <div>
            <p className="text-slate-500">Issued</p>
            <p className="mt-1 text-slate-200">{formatDate(certificate.issuedAt)}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {certificate.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center gap-2 text-sm text-slate-400">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Skills anchored to the certificate
          </div>
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
        <Button asChild className="w-full justify-between">
          <Link href={`/verify/${certificate.certId}`}>
            Open verification view
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

