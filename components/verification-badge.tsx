import { AlertTriangle, CheckCircle2, SearchX } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { VerificationState } from "@/types/certificate";

const config = {
  VALID: {
    icon: CheckCircle2,
    classes: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    pulse: "shadow-[0_0_60px_rgba(34,197,94,0.12)]"
  },
  TAMPERED: {
    icon: AlertTriangle,
    classes: "border-rose-500/30 bg-rose-500/10 text-rose-300",
    pulse: "shadow-[0_0_60px_rgba(239,68,68,0.16)]"
  },
  NOT_FOUND: {
    icon: SearchX,
    classes: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    pulse: "shadow-[0_0_60px_rgba(245,158,11,0.16)]"
  }
} as const;

export function VerificationBadge({
  state,
  large = false
}: {
  state: VerificationState;
  large?: boolean;
}) {
  const Icon = config[state].icon;

  if (large) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center rounded-[2rem] border px-6 py-8 text-center",
          config[state].classes,
          config[state].pulse
        )}
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-current/30 bg-white/5">
          <Icon className="h-8 w-8" />
        </div>
        <p className="font-display text-xl uppercase tracking-[0.3em]">{state}</p>
      </div>
    );
  }

  return (
    <Badge
      variant={state === "VALID" ? "success" : state === "TAMPERED" ? "danger" : "warning"}
      className="gap-2"
    >
      <Icon className="h-3.5 w-3.5" />
      {state}
    </Badge>
  );
}

