import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import "./globals.css";

const mono = Martian_Mono({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-mono",
});

const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Claudio Baldini | Finance & Data Analyst",
  description:
    "Gestor de activos y contable en Cepsa. SAP FI-AA, contabilidad y tesorería, con automatización y análisis de datos en SQL, Power BI y Python.",
  openGraph: {
    title: "Claudio Baldini | Finance & Data Analyst",
    description: "SAP FI-AA, contabilidad y tesorería, con automatización y análisis de datos en SQL, Power BI y Python.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${mono.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
