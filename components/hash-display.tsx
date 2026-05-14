import { Copy, Fingerprint } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, truncateHash } from "@/lib/utils";

interface HashDisplayProps {
  storedHash: string;
  currentHash?: string;
  title?: string;
  description?: string;
}

export function HashDisplay({
  storedHash,
  currentHash,
  title = "Integrity Fingerprint",
  description = "Compare the anchored hash with the latest certificate snapshot."
}: HashDisplayProps) {
  const activeHash = currentHash ?? storedHash;
  const match = storedHash === activeHash;

  return (
    <Card className="mesh-border overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-primary/20 bg-primary/10 p-2 text-primary">
            <Fingerprint className="h-5 w-5" />
          </div>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">Stored Hash</p>
          <p className="break-all font-mono text-sm text-slate-200">{storedHash}</p>
        </div>
        <div
          className={cn(
            "rounded-2xl border p-4",
            match
              ? "border-emerald-500/20 bg-emerald-500/5"
              : "border-rose-500/20 bg-rose-500/5"
          )}
        >
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">Current Hash</p>
          <p className="break-all font-mono text-sm text-slate-200">{activeHash}</p>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
          <span>{match ? "Hash match confirmed" : "Mismatch detected"}</span>
          <span className="inline-flex items-center gap-2 text-slate-500">
            <Copy className="h-4 w-4" />
            {truncateHash(activeHash, 12)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

