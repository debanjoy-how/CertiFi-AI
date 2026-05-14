import { NextResponse } from "next/server";

import { mockLogin } from "@/lib/fake-blockchain";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await mockLogin(body.email ?? "", body.password ?? "");

  if (!result.authenticated) {
    return NextResponse.json(
      { error: "Invalid demo credentials. Restore the seeded login values and try again." },
      { status: 401 }
    );
  }

  // TODO: Replace with a real auth flow and secure session cookies.
  return NextResponse.json({ data: result });
}

