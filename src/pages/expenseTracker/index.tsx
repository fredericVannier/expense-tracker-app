import type { FC } from "react";
import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction.js";
import { useGetTransactions } from "../../hooks/useGetTransactions.js";

type Transaction = "expense" | "income";

export const ExpenseTracker: FC = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions } = useGetTransactions();

  const [description, setDescription] = useState<string>("");
  const [transactionAmount, setTransactionAmount] = useState<number>(0);
  const [transactionType, setTransactionType] =
    useState<Transaction>("expense");

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
  };
  return (
    <>
      <div>
        <div>
          <h1 className="text-4xl">Expense Tracker</h1>
          <div>
            <h3>Balance</h3>
            <h2>0.00$</h2>
          </div>
          <div>
            <div>
              <h4>Income</h4>
              <p>0.00$</p>
            </div>
            <div>
              <h4>Expenses</h4>
              <p>0.00$</p>
            </div>
          </div>
          <form onSubmit={onSubmit}>
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
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="income">Income</label>

            <button type="submit">Add transaction</button>
          </form>
        </div>
      </div>
      <div>
        <h3>transactions</h3>
        <div>
          {transactions.map((transaction) => {
            const { description, transactionAmount, transactionType } =
              transaction;
            return (
              <div>
                <p>{transaction.userID}</p>
                <p>{transaction.transactionAmount}</p>
                <p>{transaction.transactionType}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
