import { QrCode } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generateQrMatrix } from "@/lib/qr";

export function QrPreview({ value }: { value: string }) {
  const cells = generateQrMatrix(value);

  return (
    <Card className="mesh-border">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-300">
            <QrCode className="h-5 w-5" />
          </div>
          <div>
            <CardTitle>QR Preview</CardTitle>
            <CardDescription>
              Public verification route encoded for instant scan-based trust checks.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mx-auto grid w-fit grid-cols-[repeat(17,minmax(0,1fr))] gap-1 rounded-[2rem] border border-white/10 bg-white p-4 shadow-glow">
          {cells.flatMap((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <span
                key={`${rowIndex}-${colIndex}`}
                className={`h-2.5 w-2.5 rounded-sm ${cell ? "bg-slate-950" : "bg-white"}`}
              />
            ))
          )}
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Encoded value</p>
          <p className="mt-2 break-all text-sm text-slate-200">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}

