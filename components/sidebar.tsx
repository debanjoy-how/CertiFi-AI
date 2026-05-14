"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Files,
  LayoutDashboard,
  PlusSquare,
  Settings,
  Shield,
  ShieldCheck
} from "lucide-react";

import { APP_NAVIGATION } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  layout: LayoutDashboard,
  plus: PlusSquare,
  shield: Shield,
  files: Files,
  settings: Settings
} as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-white/5 bg-slate-950/60 px-5 py-6 backdrop-blur-xl lg:block">
      <Link href="/" className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-white">CertiChain</p>
          <p className="text-xs text-slate-500">Admin workspace</p>
        </div>
      </Link>

      <nav className="mt-8 space-y-2">
        {APP_NAVIGATION.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition",
                isActive
                  ? "border border-primary/30 bg-primary/10 text-white shadow-glow"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 rounded-[1.75rem] border border-emerald-500/20 bg-emerald-500/10 p-5">
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Network Health</p>
        <p className="mt-3 font-display text-3xl text-white">99.98%</p>
        <p className="mt-2 text-sm text-emerald-100/80">
          Integrity checks passing across the latest registry snapshot.
        </p>
      </div>
    </aside>
  );
}

