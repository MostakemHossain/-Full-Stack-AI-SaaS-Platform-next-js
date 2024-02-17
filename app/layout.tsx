import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const IBM_PLex = IBM_Plex_Sans({ subsets: ["latin"],
weight:['400','500','600','700'],
variable:'-- font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Imaginary",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font.IBM_PLex antialiased",IBM_PLex.variable)}>{children}</body>
    </html>
  );
}
