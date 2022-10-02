import { FC } from "react";

interface CardProps {
  children?: React.ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full h-full px-[15px] py-[11px] flex flex-col rounded-lg bg-white">
      {children}
    </div>
  );
};
