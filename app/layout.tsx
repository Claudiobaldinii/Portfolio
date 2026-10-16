import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Claudio Baldini | Finance & Data Analyst",
  description:
    "Portfolio profesional de Claudio Baldini, Finance & Data Analyst especializado en finanzas, datos, automatización e IA aplicada.",
  openGraph: {
    title: "Claudio Baldini | Finance & Data Analyst",
    description:
      "Finanzas, análisis de datos, automatización e IA aplicada a procesos financieros.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
