import { NextResponse } from "next/server";

import { mockIssueCertificate } from "@/lib/fake-blockchain";
import type { DraftCertificateInput } from "@/types/certificate";

export async function POST(request: Request) {
  const body = (await request.json()) as DraftCertificateInput;

  if (!body.recipientName || !body.courseName || !body.institutionName || !body.issueDate) {
    return NextResponse.json(
      { error: "Missing required fields for mock issuance." },
      { status: 400 }
    );
  }

  // TODO: Replace this mock route with a real API handler or server action backed by Supabase.
  const certificate = await mockIssueCertificate(body);

  return NextResponse.json({ data: certificate });
}

