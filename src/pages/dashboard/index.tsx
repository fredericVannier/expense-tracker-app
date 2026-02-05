import type { FC } from "react";
import type { TransactionType } from "../expenseTracker";

import { useState } from "react";
import { SideBar } from "../../components/SideBar";
import { TopBar } from "../../components/TopBar";
import { useTransactionsSummary } from "../../hooks/useTransactionsSummary";
import { Modal } from "../../components/Modal";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import AddIcon from "@mui/icons-material/Add";

export type TransactionCategory =
  | "Loisir"
  | "Charges fixes"
  | "Course"
  | "Salaire";

type ModalProps = {
  onClose: () => void;
};
const ModalContent: FC<ModalProps> = ({ onClose }) => {
  const { addTransaction } = useAddTransaction();

  const [description, setDescription] = useState<string>("");
  const [transactionAmount, setTransactionAmount] = useState<number>(0);
  const [transactionType, setTransactionType] =
    useState<TransactionType>("expense");
  const [selectedCategory, setSelectedCategory] = useState<
    TransactionCategory | ""
  >("");

  console.log("category : ", selectedCategory);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
      transactionCategory: selectedCategory,
    });
    onClose();
  };
  return (
    <form
      onSubmit={onSubmit}
      className="flex gap-8 text-text-secondary bg-bg-secondary p-10 items-center rounded-md"
    >
      <input
        className="input"
        type="text"
        placeholder="Description"
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="Amount"
        required
        onChange={(e) => setTransactionAmount(Number(e.target.value))}
      />
      <div className="flex justify-center items-center gap-2">
        <input
          type="radio"
          id="expense"
          value="expense"
          checked={transactionType === "expense"}
          onChange={(e) => setTransactionType(e.target.value as "expense")}
        />
        <label htmlFor="expense">Expense</label>
      </div>
      <div className="flex justify-center items-center gap-2">
        <input
          type="radio"
          id="income"
          value="income"
          checked={transactionType === "income"}
          onChange={(e) => setTransactionType(e.target.value as "income")}
        />
        <label htmlFor="income">Income</label>
      </div>
      <select
        className="text-text-secondary"
        defaultValue=""
        aria-placeholder="Test"
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value as TransactionCategory)
        }
      >
        <option className="text-text-secondary" disabled={true} value="">
          Category..
        </option>
        <option value="Loisir">loisir</option>
        <option value="Salaire">salaire</option>
        <option value="Charges fixes">charge fixe</option>
        <option value="Course">Course</option>
      </select>

      <button className="accent-button-sm text-white" type="submit">
        <AddIcon color="inherit" />
      </button>
    </form>
  );
};

export const Dashboard = () => {
  const { summary } = useTransactionsSummary();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full grid h-screen grid-cols-[64px_1fr] grid-rows-[64px_1fr]">
      <SideBar />
      <TopBar />
      <div className="overflow-y-auto p-8 flex justify-between">
        <div>{summary.balance}$</div>
        <button className="accent-button" onClick={() => setIsOpen(!isOpen)}>
          <AddIcon fontSize="small" />
          <p>New payment</p>
        </button>
      </div>

      {isOpen && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <ModalContent onClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </div>
  );
};
