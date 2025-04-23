import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Finance Tracker",
  icons: {
    icon: "/icons/cash-sign-icon.ico",
  },
  description: "Finance Tracker - Designed and Developed by Daniel Cikora",
  applicationName: "Finance Tracker",
  authors: [{ name: "Daniel Cikora" }],
  generator: "Next.js",
  keywords: [
    "finance",
    "stocks",
    "tracker",
    "React",
    "Next.js",
    "Daniel Cikora",
  ],
  openGraph: {
    title: "Finance Tracker",
    description: "Track your stocks with style. Built by Daniel Cikora.",
    url: "https://finance-tracker-seven-delta.vercel.app",
    siteName: "Finance Tracker",
    type: "website",
  },
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
