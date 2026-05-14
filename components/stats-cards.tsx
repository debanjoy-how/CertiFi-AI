import {
  AlertTriangle,
  Building2,
  Clock3,
  ShieldCheck,
  Sparkles,
  ScanSearch
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { DashboardMetric } from "@/types/verification";

const iconMap = {
  shield: ShieldCheck,
  scan: ScanSearch,
  alert: AlertTriangle,
  building: Building2,
  sparkles: Sparkles,
  clock: Clock3
} as const;

export function StatsCards({ metrics }: { metrics: DashboardMetric[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = iconMap[metric.icon];

        return (
          <Card key={metric.id} className="mesh-border overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">{metric.title}</p>
                  <p className="mt-4 font-display text-3xl text-white">{metric.value}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-emerald-300">
                      {metric.change}
                    </span>
                    <span className="text-slate-500">{metric.caption}</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

