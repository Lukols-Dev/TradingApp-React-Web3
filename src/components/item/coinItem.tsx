import { FC } from "react";

interface CoinItemProps {
  icon?: any;
  openTime?: any;
  closeTime?: any;
  reciveTime?: any;
  coinName?: any;
  position?: any;
  takeProfit?: any;
  entryPrice?: any;
  stopLoss?: any;
  label?: any;
}

export const CoinItem: FC<CoinItemProps> = ({
  icon,
  openTime,
  closeTime,
  reciveTime,
  coinName,
  position,
  takeProfit,
  entryPrice,
  stopLoss,
  label,
}) => {
  return (
    <div className="bg- h-[40px] w-full flex">
      <div className="flex gap-4 items-center">
        <p className="m-0 flex gap-x-2 text-[12px] text-black font-normal font-thicccboi">
          <b>{reciveTime}</b>
        </p>
        <img className="h-full object-cover" src={icon} alt="" />
        <p className="m-0 text-[18px] text-black font-bold font-thicccboi">
          {coinName}
        </p>
      </div>
      <div className="h-full flex flex-col justify-center ml-8">
        <p className="m-0 flex gap-x-2 text-[12px] text-black font-normal font-thicccboi">
          otwarcie:<b>{openTime || "-"}</b>
        </p>
        <p className="m-0 flex gap-x-2 text-[12px] text-black font-normal font-thicccboi">
          zamknięcie:<b>{closeTime}</b>
        </p>
      </div>
      <div className="h-full flex flex-col justify-center ml-8">
        <p className="m-0 flex gap-x-2 text-[12px] text-black font-normal font-thicccboi">
          pozycja:<b>{position}</b>
        </p>
      </div>
      <div className="h-full flex flex-col justify-center ml-8">
        <p
          className="m-0 flex gap-x-2 text-[12px] text-black font-normal font-thicccboi"
          title={entryPrice}
        >
          entry price:<b>{Math.round(entryPrice * 1000) / 1000}</b>
        </p>
      </div>
      <div className="h-full flex flex-col justify-center ml-8">
        <p
          className="m-0 flex gap-x-2 text-[12px] text-black font-normal font-thicccboi"
          title={takeProfit}
        >
          take profit:<b>{Math.round(takeProfit * 1000) / 1000}</b>
        </p>
        <p
          className="m-0 flex gap-x-2 text-[12px] text-black font-normal font-thicccboi"
          title={stopLoss}
        >
          stop loss:<b>{Math.round(stopLoss * 1000) / 1000}</b>
        </p>
      </div>
      <div className="flex flex-col ml-auto mr-0 items-end relative">
        <p
          className={`m-0 flex text-[26px] font-medium font-thicccboi ${
            label === "take_profit" ? " text-[#3EA135]" : " text-[red]"
          }`}
        >
          {entryPrice - (label === "take_profit" ? takeProfit : stopLoss)}
        </p>
        <p className="m-0 text-[10px] text-black font-normal font-thicccboi absolute bottom-[-5px]">
          USDT
        </p>
      </div>
    </div>
  );
};
