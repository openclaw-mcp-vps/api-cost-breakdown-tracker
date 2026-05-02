import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Cost Breakdown Tracker — Track API Costs Per Customer & Feature",
  description: "Monitor API usage and costs broken down by customer, feature, or endpoint. Real-time cost breakdowns with threshold alerts for SaaS founders and product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="27013a97-1548-4ea8-82d7-5ab822b54411"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
