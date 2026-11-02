import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#070a10" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Benjamin MUGANGU | Ingénieur Génie Logiciel, Backend & Cloud / IA",
  description:
    "Portfolio professionnel de Benjamin Mugangu Mugisho — Ingénieur en Génie Informatique (M2 ULPGL), Lead Développeur Backend & DevOps chez Benflux Corporation, Volontaire ONU / PNUD.",
  keywords: [
    "Benjamin Mugangu",
    "Benjamin Mugangu Mugisho",
    "Ingénieur Génie Logiciel",
    "Backend Developer",
    "NestJS",
    "TypeScript",
    "Go",
    "Kubernetes",
    "DevOps",
    "Intelligence Artificielle",
    "Goma",
    "RDC",
    "ULPGL",
    "Benflux",
  ],
  authors: [{ name: "Benjamin MUGANGU MUGISHO" }],
  creator: "Benjamin MUGANGU MUGISHO",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://benjaminmugangu.dev",
    title: "Benjamin MUGANGU | Ingénieur Génie Logiciel & Architectures Cloud",
    description:
      "Conception d'architectures backend distribuées, microservices, cloud Kubernetes et intégration d'IA appliquée.",
    siteName: "Benjamin MUGANGU Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin MUGANGU | Ingénieur Génie Logiciel & Cloud",
    description: "Ingénieur en Génie Informatique, Lead Backend chez Benflux & Volontaire ONU/PNUD.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="dark">
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
