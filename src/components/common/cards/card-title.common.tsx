import { FC } from "react";
import { Card } from "./card.common";

interface CardTitleProps {
  title?: string;
  children?: React.ReactNode;
}

export const CardTitle: FC<CardTitleProps> = ({ title, children }) => {
  return (
    <Card>
      <header className="w-full h-[36px] flex justify-between items-center">
        <div className="text-lg text-black/[.5] font-roboto font-medium flex justify-center items-center rounded-lg">
          {title}
        </div>
      </header>
      {children}
    </Card>
  );
};
