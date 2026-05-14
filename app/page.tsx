import { ArrowRight, ScanSearch, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

import { AnimatedBackground } from "@/components/animated-background";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { StatsCards } from "@/components/stats-cards";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HOW_IT_WORKS, LANDING_FEATURES, TAGLINE } from "@/lib/constants";
import { landingStats } from "@/lib/mock-data";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      <main>
        <HeroSection />

        <section id="features" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="font-display text-xs uppercase tracking-[0.35em] text-primary">
              Product Snapshot
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Startup polish without backend drag</h2>
            <p className="mt-3 text-slate-400">
              {TAGLINE}. This starter ships a full UI architecture, mocked flows, and TODO hooks
              so beginner teams can focus on demo velocity.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {LANDING_FEATURES.map((feature, index) => (
              <Card key={feature.title} className="mesh-border overflow-hidden">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    {index === 0 ? (
                      <ShieldCheck className="h-5 w-5" />
                    ) : index === 1 ? (
                      <ScanSearch className="h-5 w-5" />
                    ) : (
                      <Sparkles className="h-5 w-5" />
                    )}
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="proof" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <StatsCards metrics={landingStats} />
        </section>

        <section id="workflow" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <Card className="mesh-border">
              <CardHeader>
                <CardTitle>How the demo lands</CardTitle>
                <CardDescription>
                  The experience is set up to create a memorable judge walkthrough from issue to
                  tamper alert.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {HOW_IT_WORKS.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 font-display text-primary">
                      0{index + 1}
                    </div>
                    <p className="pt-1 text-slate-300">{step}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mesh-border overflow-hidden">
              <CardHeader>
                <CardTitle>Hackathon-ready CTA</CardTitle>
                <CardDescription>
                  Jump straight into the flows your team will demo on stage.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
                  <p className="font-display text-lg text-white">Admin Experience</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Issue certificates, review analytics, and manage branding with polished mock
                    interactions.
                  </p>
                  <Button asChild className="mt-6">
                    <Link href="/dashboard">
                      Open dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="rounded-[1.75rem] border border-primary/20 bg-primary/10 p-6">
                  <p className="font-display text-lg text-white">Public Verification</p>
                  <p className="mt-2 text-sm text-indigo-100/80">
                    Test valid, tampered, and missing certificate states with animated status cards.
                  </p>
                  <Button variant="secondary" asChild className="mt-6 border-white/20 bg-white/10 text-white">
                    <Link href="/verify">
                      Verify a certificate
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

