import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config.js";
import { useGetUserInfo } from "./useGetUserInfo.js";

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();

  const addTransaction = async ({
    description,
    transactionAmount,
    transactionType,
    transactionCategory,
  }) =>
    await addDoc(transactionCollectionRef, {
      userID,
      description,
      transactionAmount,
      transactionType,
      transactionCategory,
      createdAt: serverTimestamp(),
    });
  return { addTransaction };
};
