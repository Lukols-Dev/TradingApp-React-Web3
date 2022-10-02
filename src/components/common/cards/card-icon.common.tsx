import { FC } from "react";
import { Card } from "./card.common";

interface CardIconProps {
  icon?: JSX.Element;
  children?: React.ReactNode;
}

export const CardIcon: FC<CardIconProps> = ({ icon, children }) => {
  return (
    <Card>
      <header className="w-full h-[36px] flex justify-between items-center">
        <div className="bg-[#5570F1]/[.12] text-2xl text-black/[.5] w-[36px] h-[36px] flex justify-center items-center rounded-lg">
          {icon}
        </div>
      </header>
      {children}
    </Card>
  );
};
