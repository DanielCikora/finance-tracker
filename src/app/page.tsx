"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "@/components/dashboard/Dashboard";
const Home = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        router.push("/login");
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [user, router]);
  if (loading) {
    return (
      <div className='grid w-dvw h-dvh place-items-center'>
        <div className='loader'></div>
      </div>
    );
  }
  return <Dashboard />;
};
export default Home;
