import { Inter, Poppins, Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";
import { ClientThemeProvider } from "@/src/components/ClientThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shivankar Shukla - Techops Engineer Portfolio",
  description: "Portfolio of Shivankar Shukla, Techops Engineer at Paytm specializing in TPAP UPI systems, automation, and performance optimization.",
  keywords: ["Shivankar Shukla", "Techops Engineer", "Paytm", "UPI", "System Optimization", "Portfolio"],
  authors: [{ name: "Shivankar Shukla" }],
  robots: "index, follow",
  openGraph: {
    title: "Shivankar Shukla - Techops Engineer Portfolio",
    description: "Portfolio of Shivankar Shukla, Techops Engineer at Paytm specializing in TPAP UPI systems, automation, and performance optimization.",
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins"
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="font-poppins">
        <ClientThemeProvider>
          <main className="min-h-screen main-background">
            {children}
          </main>
        </ClientThemeProvider>
      </body>
    </html>
  );
}