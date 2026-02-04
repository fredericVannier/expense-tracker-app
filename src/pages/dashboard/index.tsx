import { SideBar } from "../../components/SideBar";
import { TopBar } from "../../components/TopBar";
import { useTransactionsSummary } from "../../hooks/useTransactionsSummary";

export const Dashboard = () => {
  const { summary } = useTransactionsSummary();
  return (
    <div className="w-full grid h-screen grid-cols-[64px_1fr] grid-rows-[64px_1fr]">
      <SideBar />
      <TopBar />
      <div className="overflow-y-auto p-8">{summary.balance}$</div>
    </div>
  );
};
