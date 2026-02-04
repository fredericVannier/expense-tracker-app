import { useEffect, useState } from "react";
import {
  onSnapshot,
  orderBy,
  query,
  where,
  collection,
} from "firebase/firestore";

import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";
import type { Transaction } from "../pages/expenseTracker";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { userID } = useGetUserInfo();

  useEffect(() => {
    if (!userID) return;

    const transactionCollectionRef = collection(db, "transactions");

    const queryTransactions = query(
      transactionCollectionRef,
      where("userID", "==", userID),
      orderBy("createdAt"),
    );

    const unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
      const docs: Transaction[] = snapshot.docs.map((doc) => ({
        ...(doc.data() as Omit<Transaction, "id">),
        id: doc.id,
      }));

      setTransactions(docs);
    });

    return unsubscribe;
  }, [userID]);

  return { transactions };
};
