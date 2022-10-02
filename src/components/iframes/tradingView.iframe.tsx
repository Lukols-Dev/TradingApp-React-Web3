import { FC } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export const TradingViewChar: FC = () => {
  return <AdvancedRealTimeChart autosize={true} symbol="BTCUSDT" />;
};
