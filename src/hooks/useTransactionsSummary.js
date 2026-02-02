import { useMemo } from "react";
import { useGetTransactions } from "./useGetTransactions";

export const useTransactionsSummary = () => {
  const { transactions } = useGetTransactions();
  const summary = useMemo(() => {
    if (!transactions) return { income: 0, expense: 0, balance: 0 };

    return transactions.reduce(
      (acc, t) => {
        const amount = Number(t.transactionAmount);

        if (t.transactionType === "income") {
          acc.income += amount;
          acc.balance += amount;
        } else {
          acc.expense += amount;
          acc.balance -= amount;
        }

        return acc;
      },
      { income: 0, expense: 0, balance: 0 },
    );
  }, [transactions]);

  return { summary };
};
