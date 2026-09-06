import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/siteConfig";
import { organizationJsonLd, websiteJsonLd, JsonLdScript } from "@/lib/jsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GobalCareSolutions | Professional SEO Services & SEO Packages",
    template: "%s | GobalCareSolutions",
  },
  description:
    "Grow your online visibility with professional SEO services from GobalCareSolutions. Explore SEO packages starting at $1,000, including local SEO, technical SEO, e-commerce SEO, keyword research, content SEO, and more.",
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <JsonLdScript data={[organizationJsonLd(), websiteJsonLd()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
