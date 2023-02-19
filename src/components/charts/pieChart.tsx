import { FC, useRef } from "react";
import { Pie, getElementAtEvent } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
  summaryData: any;
}

export const PieChart: FC<ChartProps> = ({ summaryData }) => {
  const chartRef = useRef<any>();

  const onClick = (e: any) => {
    const element = getElementAtEvent(chartRef.current, e);
    console.log(element[0].index);
  };

  const data = {
    labels: ["Stop loss", "Take profit", "Cancel"],
    datasets: [
      {
        label: "# wynik",
        data: [
          summaryData.stop_loss,
          summaryData.take_profit,
          summaryData.cancel,
        ],
        backgroundColor: ["#fd7c78", "#b9e88b", "#000"],
      },
    ],
  };

  return (
    <Pie
      ref={chartRef}
      data={data}
      onClick={onClick}
      className="cursor-pointer"
    />
  );
};
