import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./_providers/auth";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FSW Trips",
  description: "Sistema de Reserva de Viagens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} antialiased`}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
