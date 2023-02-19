import { FC } from "react";
import { Card } from "../../components/common/cards";
// import { RiCoinLine } from "react-icons/ri";
// import { CardIcon, CardTitle } from "../../components/common/cards";
import { TradingViewChar } from "../../components/iframes/tradingView.iframe";

export const Dashboard: FC = () => {
  // const firstRowColumnStye =
  //   "firstRowColumn blur-sm h-[145px] max-h-[145px] w-[320px] min-w-[320px] flex justify-center items-center";
  const secoundRowColumnStye =
    "secoundRowColumn h-[500px] w-full bg-white min-w-[680px] mt-10 mb-10 rounded-lg overflow-hidden";

  return (
    <div className="h-full ml-[20px] mr-[50px] flex flex-col overflow-auto">
      {/* <div className="firstRow w-full h-[145px] flex gap-x-10">
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
      </div> */}
      <div className={secoundRowColumnStye}>
        <TradingViewChar />
      </div>
      <div className="w-full h-[300px] flex flex-col">
        <div className="w-full h-[40px] flex items-center justify-between mb-4">
          <p className="font-roboto font-bold text-base text-black/[.7] max-w-[300px] flex m-0">
            Rozgrywane pozycje
          </p>
          <p className="font-roboto font-bold text-sm text-black/[.7] max-w-[300px] flex m-0">
            12
          </p>
        </div>
        <div className="overflow-auto flex flex-col gap-y-2 pb-4">
          {cryptoData.map((item, index) => (
            <div className="w-full h-[50px] flex" key={index}>
              <Card>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between gap-x-10">
                    {item.icon}
                    <p className="m-0">{item.coinName}</p>
                  </div>
                  <div>
                    <p className="m-0">{item.profit}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const cryptoData = [
  {
    icon: (
      <svg
        width="36"
        height="34"
        viewBox="0 0 36 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M17.7029 34C27.4583 34 35.3667 26.3888 35.3667 17C35.3667 7.61116 27.4583 0 17.7029 0C7.94742 0 0.0390625 7.61116 0.0390625 17C0.0390625 26.3888 7.94742 34 17.7029 34Z"
          fill="#F3BA2F"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.0099 15.5389L17.7045 11.9846L21.4007 15.5418L23.5492 13.4725L17.7045 7.84619L11.8598 13.4711L14.0099 15.5389ZM8.19141 17.0003L10.3407 14.9319L12.49 17.0003L10.3407 19.0688L8.19141 17.0003ZM17.7045 22.0169L14.0099 18.4612L11.8568 20.5275L11.8598 20.5304L17.7045 26.1539L23.5492 20.5275L23.5507 20.5261L21.4007 18.4598L17.7045 22.0169ZM22.9154 17.0009L25.0647 14.9324L27.214 17.0009L25.0647 19.0693L22.9154 17.0009ZM17.7045 14.8997L19.8846 16.9993H19.8861L19.8846 17.0008L17.7045 19.1003L15.5244 17.0037L15.5214 16.9993L15.5244 16.9964L15.906 16.6291L16.0923 16.4513L17.7045 14.8997Z"
          fill="#F3BA2F"
        />
      </svg>
    ),
    coinName: "BNB",
    profit: "34726 PLN",
  },
  {
    icon: (
      <svg
        width="36"
        height="34"
        viewBox="0 0 36 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M17.7029 34C27.4583 34 35.3667 26.3888 35.3667 17C35.3667 7.61116 27.4583 0 17.7029 0C7.94742 0 0.0390625 7.61116 0.0390625 17C0.0390625 26.3888 7.94742 34 17.7029 34Z"
          fill="#F3BA2F"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.0099 15.5389L17.7045 11.9846L21.4007 15.5418L23.5492 13.4725L17.7045 7.84619L11.8598 13.4711L14.0099 15.5389ZM8.19141 17.0003L10.3407 14.9319L12.49 17.0003L10.3407 19.0688L8.19141 17.0003ZM17.7045 22.0169L14.0099 18.4612L11.8568 20.5275L11.8598 20.5304L17.7045 26.1539L23.5492 20.5275L23.5507 20.5261L21.4007 18.4598L17.7045 22.0169ZM22.9154 17.0009L25.0647 14.9324L27.214 17.0009L25.0647 19.0693L22.9154 17.0009ZM17.7045 14.8997L19.8846 16.9993H19.8861L19.8846 17.0008L17.7045 19.1003L15.5244 17.0037L15.5214 16.9993L15.5244 16.9964L15.906 16.6291L16.0923 16.4513L17.7045 14.8997Z"
          fill="#F3BA2F"
        />
      </svg>
    ),
    coinName: "BNB",
    profit: "34726 PLN",
  },
  {
    icon: (
      <svg
        width="36"
        height="34"
        viewBox="0 0 36 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M17.7029 34C27.4583 34 35.3667 26.3888 35.3667 17C35.3667 7.61116 27.4583 0 17.7029 0C7.94742 0 0.0390625 7.61116 0.0390625 17C0.0390625 26.3888 7.94742 34 17.7029 34Z"
          fill="#F3BA2F"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.0099 15.5389L17.7045 11.9846L21.4007 15.5418L23.5492 13.4725L17.7045 7.84619L11.8598 13.4711L14.0099 15.5389ZM8.19141 17.0003L10.3407 14.9319L12.49 17.0003L10.3407 19.0688L8.19141 17.0003ZM17.7045 22.0169L14.0099 18.4612L11.8568 20.5275L11.8598 20.5304L17.7045 26.1539L23.5492 20.5275L23.5507 20.5261L21.4007 18.4598L17.7045 22.0169ZM22.9154 17.0009L25.0647 14.9324L27.214 17.0009L25.0647 19.0693L22.9154 17.0009ZM17.7045 14.8997L19.8846 16.9993H19.8861L19.8846 17.0008L17.7045 19.1003L15.5244 17.0037L15.5214 16.9993L15.5244 16.9964L15.906 16.6291L16.0923 16.4513L17.7045 14.8997Z"
          fill="#F3BA2F"
        />
      </svg>
    ),
    coinName: "BNB",
    profit: "34726 PLN",
  },
  {
    icon: (
      <svg
        width="36"
        height="34"
        viewBox="0 0 36 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M17.7029 34C27.4583 34 35.3667 26.3888 35.3667 17C35.3667 7.61116 27.4583 0 17.7029 0C7.94742 0 0.0390625 7.61116 0.0390625 17C0.0390625 26.3888 7.94742 34 17.7029 34Z"
          fill="#F3BA2F"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.0099 15.5389L17.7045 11.9846L21.4007 15.5418L23.5492 13.4725L17.7045 7.84619L11.8598 13.4711L14.0099 15.5389ZM8.19141 17.0003L10.3407 14.9319L12.49 17.0003L10.3407 19.0688L8.19141 17.0003ZM17.7045 22.0169L14.0099 18.4612L11.8568 20.5275L11.8598 20.5304L17.7045 26.1539L23.5492 20.5275L23.5507 20.5261L21.4007 18.4598L17.7045 22.0169ZM22.9154 17.0009L25.0647 14.9324L27.214 17.0009L25.0647 19.0693L22.9154 17.0009ZM17.7045 14.8997L19.8846 16.9993H19.8861L19.8846 17.0008L17.7045 19.1003L15.5244 17.0037L15.5214 16.9993L15.5244 16.9964L15.906 16.6291L16.0923 16.4513L17.7045 14.8997Z"
          fill="#F3BA2F"
        />
      </svg>
    ),
    coinName: "BNB",
    profit: "34726 PLN",
  },
  {
    icon: (
      <svg
        width="36"
        height="34"
        viewBox="0 0 36 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M17.7029 34C27.4583 34 35.3667 26.3888 35.3667 17C35.3667 7.61116 27.4583 0 17.7029 0C7.94742 0 0.0390625 7.61116 0.0390625 17C0.0390625 26.3888 7.94742 34 17.7029 34Z"
          fill="#F3BA2F"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.0099 15.5389L17.7045 11.9846L21.4007 15.5418L23.5492 13.4725L17.7045 7.84619L11.8598 13.4711L14.0099 15.5389ZM8.19141 17.0003L10.3407 14.9319L12.49 17.0003L10.3407 19.0688L8.19141 17.0003ZM17.7045 22.0169L14.0099 18.4612L11.8568 20.5275L11.8598 20.5304L17.7045 26.1539L23.5492 20.5275L23.5507 20.5261L21.4007 18.4598L17.7045 22.0169ZM22.9154 17.0009L25.0647 14.9324L27.214 17.0009L25.0647 19.0693L22.9154 17.0009ZM17.7045 14.8997L19.8846 16.9993H19.8861L19.8846 17.0008L17.7045 19.1003L15.5244 17.0037L15.5214 16.9993L15.5244 16.9964L15.906 16.6291L16.0923 16.4513L17.7045 14.8997Z"
          fill="#F3BA2F"
        />
      </svg>
    ),
    coinName: "BNB",
    profit: "34726 PLN",
  },
];
