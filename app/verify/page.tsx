"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, QrCode, Search } from "lucide-react";

import { AnimatedBackground } from "@/components/animated-background";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { certificates } from "@/lib/mock-data";

export default function VerifyPage() {
  const router = useRouter();
  const [certId, setCertId] = useState(certificates[0].certId);
  const [isPending, startTransition] = useTransition();

  function handleVerify(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 900));
      router.push(`/verify/${certId}`);
    });
  }

  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-10 lg:px-8">
      <AnimatedBackground />
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 backdrop-blur-xl">
          <div className="max-w-2xl">
            <p className="font-display text-xs uppercase tracking-[0.35em] text-primary">
              Public Verification
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Verify any certificate in seconds</h1>
            <p className="mt-3 text-slate-400">
              Search by certificate ID or simulate a QR scan entry point. The result page supports
              valid, tampered, and missing states.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <Card className="mesh-border">
              <CardHeader>
                <CardTitle>Lookup by certificate ID</CardTitle>
                <CardDescription>
                  Try {certificates[0].certId} for a valid case or {certificates[2].certId} for a
                  tampered demo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleVerify}>
                  <Input
                    value={certId}
                    onChange={(event) => setCertId(event.target.value)}
                    placeholder="Enter certificate ID"
                  />
                  <Button className="w-full" size="lg" type="submit" disabled={isPending}>
                    {isPending ? "Verifying..." : "Verify certificate"}
                    {!isPending && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
                {isPending && <LoadingSpinner />}
              </CardContent>
            </Card>

            <Card className="mesh-border overflow-hidden">
              <CardHeader>
                <CardTitle>QR scan placeholder</CardTitle>
                <CardDescription>
                  Keep this UI for the hackathon demo, then replace it with a camera or file-upload
                  scanner later.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex min-h-[220px] items-center justify-center rounded-[1.75rem] border border-dashed border-cyan-400/30 bg-cyan-400/5">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950/70 text-cyan-300">
                      <QrCode className="h-7 w-7" />
                    </div>
                    <p className="mt-4 font-medium text-white">Camera scanner coming next</p>
                    <p className="mt-2 max-w-xs text-sm text-slate-400">
                      TODO: connect a real QR package or mobile camera flow after the UI review is
                      approved.
                    </p>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => setCertId(certificates[2].certId)}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Load tampered demo ID
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

