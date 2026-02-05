import type { FC, ReactNode } from "react";
import type { TransactionCategory } from "../../pages/dashboard";

type ChipStyles = {
  bg: string;
  text: string;
};

const chipCategoryStyles: Record<TransactionCategory, ChipStyles> = {
  "Charges fixes": {
    bg: "bg-[#027ced]",
    text: "text-white",
  },
  Course: {
    bg: "bg-[#eb4e53]",
    text: "text-white",
  },
  Loisir: {
    bg: "bg-[#08d47f]",
    text: "text-white",
  },
  Salaire: {
    bg: "bg-[#feda5f]",
    text: "text-white",
  },
};

type Props = {
  children: ReactNode;
  category: TransactionCategory;
};
export const Chip: FC<Props> = ({ children, category }) => {
  const style = chipCategoryStyles[category];
  return (
    <div
      className={`px-6 w-fit rounded-full bg-accent-soft font-bold ${style.bg} ${style.text}`}
    >
      {children}
    </div>
  );
};
