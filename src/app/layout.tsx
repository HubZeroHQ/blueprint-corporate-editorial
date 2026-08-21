import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

import { metadata as siteMetadata } from "@/config/metadata";
import { AppProvider } from "@/providers/AppProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/config/site";
import { SkipLink } from "@/components/shared/SkipLink";

export const metadata = {
  ...siteMetadata,
  icons: {
    icon: [
      { url: "/brand/favicon.ico" },
      { url: "/brand/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/brand/apple-touch-icon.png" }
    ]
  }
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.locale} className={`scroll-smooth ${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans text-stone-900 bg-stone-50 antialiased selection:bg-stone-200 flex flex-col min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, description: site.description, logo: new URL("/brand/logo-dark.svg", site.url).toString() }).replace(/</g, "\\u003c") }} />
        <SkipLink />
        <AppProvider>
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
