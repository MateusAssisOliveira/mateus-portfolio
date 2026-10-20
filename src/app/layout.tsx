import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mateus Assis | Fundador Técnico & Desenvolvedor de Soluções B2B",
  description:
    "Desenvolvimento de SaaS corporativos, plataformas regulatórias de SST/NR-1 e automações de processos inteligentes. Engenharia de software moderna com Next.js, Supabase e IA Aumentada.",
  keywords: [
    "Mateus Assis",
    "Desenvolvedor B2B",
    "SaaS NR-1",
    "Automação de Processos",
    "Engenharia de Software Aumentada",
    "Next.js",
    "Supabase",
    "TypeScript",
    "SST",
    "RPA",
  ],
  authors: [{ name: "Mateus Assis" }],
  creator: "Mateus Assis",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mateusassis.dev",
    title: "Mateus Assis | Fundador Técnico & Desenvolvedor de Soluções B2B",
    description:
      "Desenvolvedor de soluções B2B, criador de produtos digitais e especialista em automação operacional e SaaS regulatório.",
    siteName: "Mateus Assis Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
