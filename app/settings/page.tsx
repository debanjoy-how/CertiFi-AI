"use client";

import { useState } from "react";
import { Save, Shield, UploadCloud } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { institutionSettings } from "@/lib/mock-data";

export default function SettingsPage() {
  const [settings, setSettings] = useState(institutionSettings);
  const [message, setMessage] = useState<string | null>(null);

  return (
    <DashboardShell
      title="Institution Settings"
      subtitle="Brand the experience, tune security placeholders, and leave clean extension points for real integrations later."
      action={
        <Button onClick={() => setMessage("Settings saved locally. TODO: persist to Supabase.")}>
          <Save className="mr-2 h-4 w-4" />
          Save settings
        </Button>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <Card className="mesh-border">
          <CardHeader>
            <CardTitle>Institution profile</CardTitle>
            <CardDescription>
              Configure the issuer identity displayed on certificates and verification pages.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="institutionName">Institution name</Label>
              <Input
                id="institutionName"
                value={settings.institutionName}
                onChange={(event) =>
                  setSettings((current) => ({ ...current, institutionName: event.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="supportEmail">Support email</Label>
              <Input
                id="supportEmail"
                value={settings.supportEmail}
                onChange={(event) =>
                  setSettings((current) => ({ ...current, supportEmail: event.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={settings.website}
                onChange={(event) =>
                  setSettings((current) => ({ ...current, website: event.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brandingAccent">Brand accent</Label>
              <Input
                id="brandingAccent"
                value={settings.brandingAccent}
                onChange={(event) =>
                  setSettings((current) => ({ ...current, brandingAccent: event.target.value }))
                }
              />
            </div>
            {message && <p className="text-sm text-slate-400">{message}</p>}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="mesh-border">
            <CardHeader>
              <CardTitle>Branding assets</CardTitle>
              <CardDescription>
                Polished upload area placeholder for future storage integration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex min-h-[220px] flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-primary/30 bg-primary/5 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                  <UploadCloud className="h-7 w-7" />
                </div>
                <p className="mt-4 font-medium text-white">Logo upload placeholder</p>
                <p className="mt-2 max-w-xs text-sm text-slate-400">
                  TODO: wire this area to Supabase Storage or a signed upload endpoint.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mesh-border">
            <CardHeader>
              <CardTitle>Security controls</CardTitle>
              <CardDescription>
                UX-ready toggles with placeholder state for future auth and audit wiring.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <div>
                  <p className="font-medium text-white">Require two-factor authentication</p>
                  <p className="text-sm text-slate-400">Recommended before real admin access goes live.</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.requireTwoFactor}
                  onChange={(event) =>
                    setSettings((current) => ({ ...current, requireTwoFactor: event.target.checked }))
                  }
                  className="h-5 w-5 accent-indigo-500"
                />
              </label>
              <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <div>
                  <p className="font-medium text-white">Allow public verification</p>
                  <p className="text-sm text-slate-400">Keep enabled for hackathon demo flows.</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.allowPublicVerification}
                  onChange={(event) =>
                    setSettings((current) => ({
                      ...current,
                      allowPublicVerification: event.target.checked
                    }))
                  }
                  className="h-5 w-5 accent-indigo-500"
                />
              </label>
              <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <div className="flex items-start gap-3">
                  <Shield className="mt-0.5 h-5 w-5 text-emerald-300" />
                  <div>
                    <p className="font-medium text-white">Send issue notifications</p>
                    <p className="text-sm text-slate-400">
                      TODO: connect notification workflows once email infrastructure exists.
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.autoIssueEmails}
                  onChange={(event) =>
                    setSettings((current) => ({ ...current, autoIssueEmails: event.target.checked }))
                  }
                  className="h-5 w-5 accent-indigo-500"
                />
              </label>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}

