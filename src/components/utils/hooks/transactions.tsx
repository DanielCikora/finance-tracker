"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
const useTransactions = () => {
  const [transactions, setTransactions] = useState<any>([]);
  useEffect(() => {
    const fetchTransactions = async () => {
      const querySnapshot = await getDocs(collection(db, "transactions"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      setTransactions(data);
    };
    fetchTransactions();
  }, []);
  return transactions;
};
export default useTransactions;
