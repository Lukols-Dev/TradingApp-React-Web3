import { FC } from "react";
import { RiCoinLine } from "react-icons/ri";
import { CardIcon, CardTitle } from "../../components/common/cards";
import { TradingViewChar } from "../../components/iframes/tradingView.iframe";

export const Dashboard: FC = () => {
  const firstRowColumnStye =
    "firstRowColumn h-[145px] max-h-[145px] w-[320px] min-w-[320px] flex justify-center items-center";
  const secoundRowColumnStye =
    "secoundRowColumn h-full w-full bg-white min-w-[680px] mt-10 mb-10 rounded-lg overflow-hidden";

  return (
    <div className="h-full ml-[20px] mr-[50px] flex flex-col overflow-auto">
      <div className="firstRow w-full h-[145px] flex gap-x-10">
        <div className={firstRowColumnStye}>
          <CardIcon icon={<RiCoinLine />}>
            <div className="w-full h-full flex items-center justify-center gap-2">
              <h2 className="text-5xl font-roboto font-medium text-black">
                5000000
              </h2>
              <p className="text-base font-roboto font-light text-black relative top-1">
                USDT
              </p>
            </div>
          </CardIcon>
        </div>
        <div className={firstRowColumnStye}>
          <CardTitle title="Profits">
            <div className="w-full h-full flex items-center justify-center gap-2">
              <h2 className="text-5xl font-roboto font-medium text-black">
                2000000
              </h2>
              <p className="text-base font-roboto font-light text-black relative top-1">
                $
              </p>
            </div>
          </CardTitle>
        </div>
        <div className={firstRowColumnStye}>
          <CardTitle title="Balance">
            <div className="w-full h-full flex items-center justify-center gap-2">
              <h2 className="text-5xl font-roboto font-medium text-black">
                2000000
              </h2>
              <p className="text-base font-roboto font-light text-black relative top-1">
                $
              </p>
            </div>
          </CardTitle>
        </div>
      </div>
      <div className={secoundRowColumnStye}>
        <TradingViewChar />
      </div>
    </div>
  );
};
