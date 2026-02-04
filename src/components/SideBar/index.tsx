import type { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  classes?: string;
};

export const SideBar: FC<Props> = () => {
  return (
    <div className="row-span-2 bg-bg-secondary border-r border-bg-border flex justify-center py-5">
      <MenuIcon />
    </div>
  );
};
