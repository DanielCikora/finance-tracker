import type { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "Finance Tracker - Designed and Developed by Daniel Cikora",
};
export default function Home() {
  redirect("/dashboard");
}
