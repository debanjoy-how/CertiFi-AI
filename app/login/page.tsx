"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import { AnimatedBackground } from "@/components/animated-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEMO_ADMIN } from "@/lib/constants";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState(DEMO_ADMIN.email);
  const [password, setPassword] = useState(DEMO_ADMIN.password);
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(async () => {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const payload = await response.json();

      if (!response.ok) {
        setMessage(payload.error ?? "Mock login failed.");
        return;
      }

      setMessage("Mock login successful. Redirecting to the dashboard...");
      router.push("/dashboard");
    });
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">
      <AnimatedBackground />
      <div className="absolute left-6 top-6 z-10">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to landing
          </Link>
        </Button>
      </div>
      <Card className="mesh-border relative z-10 w-full max-w-md overflow-hidden">
        <CardHeader className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl border border-primary/30 bg-primary/10 text-primary shadow-glow">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <CardTitle className="mt-4">Welcome back</CardTitle>
          <CardDescription>
            Use the demo admin credentials below to access the hackathon dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <Button className="w-full" size="lg" type="submit" disabled={isPending}>
              {isPending ? "Signing in..." : "Sign In"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="w-full"
              onClick={() => {
                setEmail(DEMO_ADMIN.email);
                setPassword(DEMO_ADMIN.password);
                setMessage("Demo credentials restored.");
              }}
            >
              Fill demo admin login
            </Button>
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-400">
              <p className="text-white">Demo credentials</p>
              <p className="mt-2">Email: {DEMO_ADMIN.email}</p>
              <p>Password: {DEMO_ADMIN.password}</p>
            </div>
            {message && <p className="text-center text-sm text-slate-400">{message}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

