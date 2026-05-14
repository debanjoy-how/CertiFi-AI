import Link from "next/link";

import { VerificationBadge } from "@/components/verification-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import type { Certificate } from "@/types/certificate";
import { formatDate } from "@/lib/utils";

export function RecentCertificates({ certificates }: { certificates: Certificate[] }) {
  return (
    <Card className="mesh-border">
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <div>
          <CardTitle>Recent Certificates</CardTitle>
          <CardDescription>
            A quick view of newly issued and recently verified credentials.
          </CardDescription>
        </div>
        <Button variant="secondary" asChild>
          <Link href="/certificates">View all</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Recipient</TableHead>
              <TableHead>Certificate ID</TableHead>
              <TableHead>Issued</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Checks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {certificates.slice(0, 4).map((certificate) => {
              const state =
                certificate.status === "REVOKED"
                  ? "TAMPERED"
                  : certificate.storedHash === certificate.currentHash
                    ? "VALID"
                    : "TAMPERED";

              return (
                <TableRow key={certificate.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-white">{certificate.recipientName}</p>
                      <p className="text-xs text-slate-500">{certificate.courseName}</p>
                    </div>
                  </TableCell>
                  <TableCell>{certificate.certId}</TableCell>
                  <TableCell>{formatDate(certificate.issuedAt)}</TableCell>
                  <TableCell>
                    <VerificationBadge state={state} />
                  </TableCell>
                  <TableCell>{certificate.verificationCount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

