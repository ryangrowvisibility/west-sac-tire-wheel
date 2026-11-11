import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Oswald({ variable: "--font-heading", subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "West Sac Tire & Wheel | New & Used Tires in West Sacramento, CA",
  description:
    "New and used tires, installation, balancing, flat repair, TPMS service and custom wheels on Harbor Blvd in West Sacramento. Rated 4.5 stars from 61 reviews. Call (916) 372-2700.",
  openGraph: {
    title: "West Sac Tire & Wheel | Tire Shop in West Sacramento",
    description: "Budget-friendly new and used tires, fast installs and fair prices. 640 Harbor Blvd, West Sacramento. Call (916) 372-2700.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
