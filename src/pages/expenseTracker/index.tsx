import type { FC } from "react";
import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useTransactionsSummary } from "../../hooks/useTransactionsSummary";
import type { TransactionCategory } from "../dashboard";

export type TransactionType = "expense" | "income";

export type Transaction = {
  userID: string;
  description: string;
  transactionAmount: number;
  transactionType: TransactionType;
  transactionCategory: TransactionCategory;
  createdAt: string;
};

export const ExpenseTracker: FC = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions } = useGetTransactions();

  const [description, setDescription] = useState<string>("");
  const [transactionAmount, setTransactionAmount] = useState<number>(0);
  const [transactionType, setTransactionType] =
    useState<TransactionType>("expense");
  const { summary } = useTransactionsSummary();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
      transactionCategory,
    });
  };

  return (
    <>
      <div className="bg-bg-primary flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl">Expense Tracker</h1>
          <div className="flex items-center gap-3">
            <div>
              <h3>Balance</h3>
              <h2>{summary.balance}$</h2>
            </div>
            <div>
              <h4>Income</h4>
              <p>{summary.income}$</p>
            </div>
            <div>
              <h4>Expenses</h4>
              <p>{summary.expense}$</p>
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="flex gap-8 bg-slate-200 p-3 rounded-sm"
          >
            <input
              type="text"
              placeholder="Description"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              required
              onChange={(e) => setTransactionAmount(Number(e.target.value))}
            />
            <div className="flex justify-center gap-2">
              <input
                type="radio"
                id="expense"
                value="expense"
                checked={transactionType === "expense"}
                onChange={(e) =>
                  setTransactionType(e.target.value as "expense")
                }
              />
              <label htmlFor="expense">Expense</label>
            </div>
            <div className="flex justify-center gap-2">
              <input
                type="radio"
                id="income"
                value="income"
                checked={transactionType === "income"}
                onChange={(e) => setTransactionType(e.target.value as "income")}
              />
              <label htmlFor="income">Income</label>
            </div>

            <button className="bg-white rounded-md p-1" type="submit">
              Add transaction
            </button>
          </form>
        </div>
      </div>
      <div>
        <h3>transactions</h3>

        <div className="overflow-x-auto rounded-md shadow-sm border border-gray-200">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Montant
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {transactions.map((transaction: Transaction, index: number) => {
                const { description, transactionAmount, transactionType } =
                  transaction;
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 text-start py-3 text-sm font-medium text-gray-900">
                      {transactionAmount} €
                    </td>
                    <td className="px-4 py-3 text-sm text-start text-gray-700">
                      {description}
                    </td>
                    <td className="px-4 py-3 text-sm text-start">
                      <span
                        className={`inline-flex rounded-md ${transactionType === "income" ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"} px-3 py-1 text-xs font-medium `}
                      >
                        {transactionType}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
