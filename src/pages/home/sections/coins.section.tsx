import { FC } from "react";
import { coinIcons } from "../../../assets/coins";

export const CoinsSection: FC = () => {
  return (
    <section className="flex w-full h-[80px] items-center justify-between">
      {coinList.map((item, index) => (
        <div className="h-[70px] w-[70px] flex items-center justify-center">
          <img key={index} alt="" src={item.icon} />
        </div>
      ))}
    </section>
  );
};

const coinList = [
  {
    icon: coinIcons.atomCoin,
  },
  {
    icon: coinIcons.shibCoin,
  },
  {
    icon: coinIcons.inchCoin,
  },
  {
    icon: coinIcons.aaveCoin,
  },
  {
    icon: coinIcons.adaCoin,
  },
  {
    icon: coinIcons.algoCoin,
  },
];
