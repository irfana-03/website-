import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientProviders from "../components/ClientProviders";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SUNDAYS | Premium Restobar Chennai",
  description: "Experience the Midnight Luxe aesthetic at Sundays Restobar.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#131313",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        <ClientProviders>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
