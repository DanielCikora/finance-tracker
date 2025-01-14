import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
interface TransactionsDataTypes {
  amount: number;
  category: string;
  timestamp?: any;
  monthYear: string;
}
export async function addTransaction(transaction: TransactionsDataTypes) {
  try {
    const { amount, category } = transaction;
    const monthYear = new Date().toISOString().slice(0, 7);
    await addDoc(collection(db, "transactions"), {
      amount,
      category,
      timestamp: serverTimestamp(),
      monthYear,
    });
    console.log("Transactions added successfully!");
  } catch (error) {
    console.error("Error adding transaction: ", error);
  }
}
