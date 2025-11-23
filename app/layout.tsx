import "@/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Alpha Medi Lab",
  description: "Your Trusted Partner in Medical Diagnostics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <main className="min-h-screen pt-20 lg:pt-24">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
