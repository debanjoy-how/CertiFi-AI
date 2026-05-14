import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MARKETING_LINKS } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary shadow-glow">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.35em] text-slate-300">
              CertiChain
            </p>
            <p className="text-xs text-slate-500">Trust fabric for digital credentials</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {MARKETING_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="/verify">Public Verify</Link>
          </Button>
          <Button asChild>
            <Link href="/login">
              Admin Login
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

