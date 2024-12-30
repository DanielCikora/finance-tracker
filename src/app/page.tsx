"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "@/components/dashboard/Dashboard";
export default function Home() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);
  if (!user) {
    return <p>Redirecting...</p>;
  }
  return <Dashboard />;
}
