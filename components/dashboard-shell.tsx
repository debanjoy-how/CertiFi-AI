import type { ReactNode } from "react";
import Link from "next/link";

import { DashboardHeader } from "@/components/dashboard-header";
import { Sidebar } from "@/components/sidebar";
import { APP_NAVIGATION } from "@/lib/constants";

export function DashboardShell({
  title,
  subtitle,
  action,
  children
}: {
  title: string;
  subtitle: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
          <div className="mb-6 flex gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/50 p-2 lg:hidden">
            {APP_NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-primary/30 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <DashboardHeader title={title} subtitle={subtitle} action={action} />
          <div className="mt-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
