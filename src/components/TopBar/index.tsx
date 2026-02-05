import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

type Props = {
  classes?: string;
  children?: ReactNode;
};
export const TopBar: FC<Props> = () => {
  const navigate = useNavigate();
  const { profilePhoto, name: userName } = useGetUserInfo();
  return (
    <div className="bg-bg-secondary border-b border-bg-border flex items-center justify-between px-6">
      <div className="flex items-center gap-5">
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button onClick={() => navigate("/assets")}>Assets</button>
        <div className="border-r-2 border-r-gray-500 h-8 w-0.5"></div>
      </div>
      <div className="flex gap-5 items-center">
        <p className="font-bold">{userName}</p>

        {profilePhoto && (
          <div className="w-fit h-full rounded-full">
            <img className="w-12 h-12 rounded-full" src={profilePhoto} />
          </div>
        )}
        <ExpandMoreIcon />
      </div>
    </div>
  );
};
