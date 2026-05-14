import type { ReactNode } from "react";

export function DashboardHeader({
  title,
  subtitle,
  action
}: {
  title: string;
  subtitle: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-white/5 pb-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="font-display text-xs uppercase tracking-[0.35em] text-primary">
          Control Center
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white lg:text-4xl">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-400 lg:text-base">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

