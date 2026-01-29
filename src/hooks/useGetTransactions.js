import { useEffect, useState } from "react";
import {
  onSnapshot,
  orderBy,
  query,
  where,
  collection,
} from "firebase/firestore";
import { db } from "../config/firebase-config.js";
import { useGetUserInfo } from "./useGetUserInfo.js";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const { userID } = useGetUserInfo();

  const transactionCollectionRef = collection(db, "transactions");

  const getTransactions = async () => {
    let unsubscribe;
    try {
      const queryTransactions = query(
        transactionCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt"),
      );

      unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });
        });

        setTransactions(docs);
      });
      return () => unsubscribe();
    } catch (err) {
      console.log("error is: ", err);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return { transactions };
};
