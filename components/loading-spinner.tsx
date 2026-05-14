"use client";

import { LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

export function LoadingSpinner({ label = "Loading verification..." }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8 text-slate-300">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
      >
        <LoaderCircle className="h-8 w-8 text-primary" />
      </motion.div>
      <p className="text-sm">{label}</p>
    </div>
  );
}

