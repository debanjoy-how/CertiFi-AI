import { NextResponse } from "next/server";

import { mockVerifyCertificate } from "@/lib/fake-blockchain";

export async function POST(request: Request) {
  const body = await request.json();
  const certId = String(body.certId ?? "");

  if (!certId) {
    return NextResponse.json({ error: "Certificate ID is required." }, { status: 400 });
  }

  // TODO: Replace with real verification logging and Supabase queries.
  const result = await mockVerifyCertificate(certId);

  return NextResponse.json({ data: result });
}

