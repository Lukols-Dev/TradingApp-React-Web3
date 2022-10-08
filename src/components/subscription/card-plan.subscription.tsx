import { FC } from "react";

import { Button } from "antd";
import { IoCheckmarkSharp } from "react-icons/io5";

interface CardPlanSubscriptionProps {
  price: number;
  status: boolean;
  subscribe: () => void;
  unsubscribe: () => void;
}

export const CardPlanSubscription: FC<CardPlanSubscriptionProps> = (props) => {
  return (
    <div {...props} className="px-4 rounded-lg border-2 border-gray">
      <div className="w-[300px] h-full">
        <div className="w-full h-[100px] font-roboto font-bold text-2xl flex flex-col items-center justify-center">
          Starter
          <span className="bg-black w-[30px] h-[4px] mt-4 rounded-[50px]"></span>
        </div>
        <div className="w-full h-[100px] flex items-center justify-center">
          <div className="flex ml-8 gap-2 items-center justify-center ">
            <span className="text-2xl font-bold relative bottom-6">$</span>
            <p className="m-0 font-roboto font-bold text-6xl">{props.price}</p>
            <span className=" text-sm font-bold relative top-4">/month</span>
          </div>
        </div>
        <div className="w-full h-[100px] font-roboto font-bold text-sm flex flex-col items-center justify-center">
          {props.status && (
            <span className="bg-[#f6ffed] text-[#389e0d] border border-2px border-[#b7eb8f] px-3 py-2 rounded-lg">
              Active
            </span>
          )}
        </div>
        <div className="flex flex-col mt-2 mb-10">
          <div className="w-full h-[25px] font-roboto font-medium text-base flex items-center">
            <span className="flex gap-2">
              <IoCheckmarkSharp className="relative top-1" /> Pełny dostęp do
              aplikacji TradingApp
            </span>
          </div>
          <div className="w-full h-[25px] font-roboto font-medium text-base flex items-center">
            <span className="flex gap-2">
              <IoCheckmarkSharp className="relative top-1" /> Dostęp do bazy
              wiedzy
            </span>
          </div>
          <div className="w-full h-[25px] font-roboto font-medium text-base flex items-center">
            <span className="flex gap-2">
              <IoCheckmarkSharp className="relative top-1" /> Aktualne analizy
              danych
            </span>
          </div>
          <div className="w-full h-[25px] font-roboto font-medium text-base flex items-center">
            <span className="flex gap-2">
              <IoCheckmarkSharp className="relative top-1" /> Big Data
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          {props.status ? (
            <Button
              className="w-60 rounded-lg bg-[#0751D3] border-[transparent] hover:bg-[#0751D3]/[.6]"
              size="large"
              type="primary"
              onClick={props.unsubscribe}
            >
              Unsubscribe
            </Button>
          ) : (
            <Button
              className="w-60 rounded-lg bg-[#0751D3] border-[transparent] hover:bg-[#0751D3]/[.6]"
              size="large"
              type="primary"
              onClick={props.subscribe}
            >
              Subscribe
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
