import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Mateus Assis | Desenvolvedor Full-Stack & Fundador Técnico",
  description:
    "Plataformas SaaS regulatórias, aplicações web modernas e automações corporativas de alta performance.",
  keywords: [
    "Mateus Assis",
    "Desenvolvedor B2B",
    "SaaS NR-1",
    "Automação de Processos",
    "Next.js",
    "Supabase",
    "TypeScript",
  ],
  authors: [{ name: "Mateus Assis" }],
  creator: "Mateus Assis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen w-full overflow-x-hidden bg-[#0f0f11] text-[#f4f4f5] antialiased selection:bg-amber-500/20 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
