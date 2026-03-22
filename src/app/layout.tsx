import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seasonal NYC — New York State Produce Guide",
  description:
    "What's in season right now in New York State? Browse peak and in-season produce by month at your local farmers market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
