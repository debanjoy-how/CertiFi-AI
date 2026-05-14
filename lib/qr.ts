export function buildVerificationUrl(certId: string) {
  return `https://certichain.demo/verify/${certId}`;
}

export function generateQrMatrix(seed: string, size = 17) {
  const chars = Array.from(seed);

  return Array.from({ length: size }, (_, row) =>
    Array.from({ length: size }, (_, col) => {
      const charCode = chars[(row * size + col) % chars.length]?.charCodeAt(0) ?? 0;
      return (charCode + row + col) % 3 !== 0;
    })
  );
}

// TODO: Replace this helper with the `qrcode` package when real export-ready QR assets are needed.

