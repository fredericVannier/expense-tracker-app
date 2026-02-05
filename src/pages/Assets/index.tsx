import type { FC } from "react";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import type { Transaction } from "../expenseTracker";
import { Chip } from "../../components/Chip";
import { SideBar } from "../../components/SideBar";
import { TopBar } from "../../components/TopBar";

export const Assets: FC = () => {
  const { transactions } = useGetTransactions();
  return (
    <div className="w-full grid h-screen grid-cols-[64px_1fr] grid-rows-[64px_1fr] gap-y-6">
      <SideBar />
      <TopBar />
      <div className="flex flex-col items-center gap-6 w-full h-full">
        <h3 className="text-4xl font-bold">Transactions</h3>
        <div className="w-2/3">
          <div className="overflow-x-auto rounded-md shadow-sm">
            <table className="min-w-full border-collapse">
              <thead className="">
                <tr>
                  <th className="th justify-center">Montant</th>
                  <th className="th justify-center">Description</th>
                  <th className="th justify-center items-center">Type</th>
                  <th className="th justify-center items-center">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bg-secondary bg-bg-primary text-text-secondary">
                {transactions.map((transaction: Transaction, index: number) => {
                  const {
                    description,
                    transactionAmount,
                    transactionType,
                    transactionCategory,
                  } = transaction;
                  return (
                    <tr key={index} className="hover:bg-bg-secondary">
                      <td className="px-4 text-start py-3 text-sm font-medium">
                        {transactionAmount} €
                      </td>
                      <td className="px-4 py-3 text-sm text-start">
                        {description}
                      </td>
                      <td className="px-4 py-3 text-sm text-start">
                        <span
                          className={`inline-flex rounded-md ${transactionType === "income" ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"} px-3 py-1 text-xs font-medium `}
                        >
                          {transactionType}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-start">
                        <Chip category={transactionCategory}>
                          {transactionCategory}
                        </Chip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
