import Navigation from "@/components/navigation/Navigation";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "Finance Tracker - Designed and Developed by Daniel Cikora",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}
