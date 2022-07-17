import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="w-full h-[50px] flex flex-col">
      <div className=" mx-36 h-10 items-center justify-between flex border-white/[.2] border-t">
        <p className="text-white/[.2] text-sm font-medium font-thicccboi">
          © 2021 - 2022 TradingApp
        </p>
        <div className="flex gap-6">
          <p className="text-white/[.2] text-sm font-medium font-thicccboi">
            Privacy Policy
          </p>
          <p className="text-white/[.2] text-sm font-medium font-thicccboi">
            Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};
