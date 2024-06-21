import type { Metadata } from "next";
import { Inter, } from "next/font/google";
import "./globals.css";
import { name, summary } from "../../cv.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: name,
  description: summary,
  openGraph: {
    title: name,
    description: summary,
    type: "website",
    url: "https://abhinavyadav.in",
    images: [`/api/og?name=${name}&summary=${summary}`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </head>
      <body className={inter.className + " bg-neutral-950"}>{children}</body>
    </html>
  );
}
