"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { HashDisplay } from "@/components/hash-display";
import { QrPreview } from "@/components/qr-preview";
import { VerificationBadge } from "@/components/verification-badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-indigo-200">
            <Sparkles className="h-4 w-4" />
            24-hour hackathon MVP starter
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
            Build a <span className="text-gradient">tamper-proof trust layer</span> for every
            certificate you issue.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            CertiChain AI gives beginner teams a polished, scalable UI foundation for digital
            certificate issuance, verification, and fraud detection demos.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Explore Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/verify">Try Verification Flow</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Next.js 14 App Router
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Mock blockchain anchor
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Shadcn-style components
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-x-10 -top-10 h-32 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/50 p-4 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-300">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white">Live integrity verdict</p>
                  <p className="text-xs text-slate-500">Certificate ID CERT-2026-1041</p>
                </div>
              </div>
              <VerificationBadge state="VALID" />
            </div>
            <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
              <QrPreview value="https://certichain.demo/verify/CERT-2026-1041" />
              <HashDisplay
                storedHash="a87c7f775824d7926b58f9ea5f5a87c4d48f8574f41dfbcbef0d50f783f13d41"
                currentHash="a87c7f775824d7926b58f9ea5f5a87c4d48f8574f41dfbcbef0d50f783f13d41"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

