import { FC, useRef, useEffect, useState } from "react";
import { Pie, getElementAtEvent } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Spin } from "antd";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
  summaryData: {
    stop_loss: number;
    take_profit: number;
    cancel: number;
  };
}

export const PieChart: FC<ChartProps> = ({ summaryData }) => {
  const chartRef = useRef<any>();
  const [loading, setLoading] = useState(false);

  let stopLoss = summaryData.stop_loss ? summaryData.stop_loss : 0;
  let takeProfit = summaryData.take_profit ? summaryData.take_profit : 0;
  let cancel = summaryData.cancel ? summaryData.cancel : 0;

  const data = {
    labels: ["Stop loss", "Take profit"],
    datasets: [
      {
        label: "# wynik",
        data: [stopLoss, takeProfit],
        backgroundColor: ["#fd7c78", "#b9e88b"],
      },
    ],
  };

  const onClick = (e: any) => {
    const element = getElementAtEvent(chartRef.current, e);
    console.log(element[0].index);
  };

  useEffect(() => {
    if (stopLoss === 0 && takeProfit === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [cancel, stopLoss, takeProfit]);

  return (
    <Spin spinning={loading} tip="Chart Loading...">
      <Pie
        ref={chartRef}
        data={data}
        onClick={onClick}
        className="cursor-pointer chartBox"
      />
    </Spin>
  );
};
