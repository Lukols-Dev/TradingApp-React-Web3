import { ChangeEvent, FC, useEffect, useState } from "react";

import mobileHero from "../../../assets/phones/mobileHero.svg";
import androidDownload from "../../../assets/icons/androidDownload.svg";
import iosDownload from "../../../assets/icons/iosDownload.svg";
import atomIcon from "../../../assets/coins/atom-icon.svg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import { ref, listAll, getDownloadURL } from "firebase/storage";
import { firebaseStorage, cloudFirestore } from "../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { timeConverter } from "../../../utils/timeConverter";
import { DateTimeConverter } from "../../../utils/dateConverter";
import { PieChart } from "../../../components/charts/pieChart";
import { Select } from "antd";
import { motion } from "framer-motion";
import { SummaryDataService } from "../../../services/summary.service";
import { currentDate, reverseDate } from "../../../utils/date";
import { CoinItem } from "../../../components/item/coinItem";

export const HeroSectionNew: FC = () => {
  const [passwordPopup, setPasswordPopup] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [popup, setPopup] = useState<boolean>(false);
  const [summary, setSummary] = useState<any>(null);
  const [date, setDate] = useState<string>("");
  const [interval, setInterval] = useState<string>("");
  const [itemsArray, setItemsArray] = useState<string[]>([]);

  const downloadApp = async () => {
    setPasswordPopup(true);
    try {
      const docRef = doc(cloudFirestore, "PRICING", "xF3cnffMw2Bwhlqv66xf");
      const response = await getDoc(docRef);
      if (password === response.data()?.password) {
        setPasswordPopup(false);
        const response = await getDownloadURL(
          (
            await listAll(ref(firebaseStorage, "download/"))
          ).items[0]
        );
        if (response) {
          window.open(response, "_self");
        }
      }
    } catch (error) {
      console.log(error);
    }
    setPassword("");
  };

  const closePopup = () => {
    if (!popup) {
      setPasswordPopup(false);
      setPassword("");
    } else {
      setPopup(false);
      console.log("popup close");
    }
  };

  const handleChange = (value: string) => {
    setItemsArray([]);
    setDate(value);
  };

  const handleChange2 = (value: string) => {
    setItemsArray([]);
    setInterval(value);
  };

  const showPopup = () => {
    setPopup(true);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      downloadApp();
      e.preventDefault();
    }
  };

  const getDayPosition = async (day: string, interval: string) => {
    const resp = await SummaryDataService.getDayPositions(day, interval);
    setSummary(resp.data);
    if (itemsArray.length === 0) {
      await setItemsArray(
        itemsArray.concat(
          resp.data.cancel_items,
          resp.data.stop_loss_items,
          resp.data.take_profit_items
        )
      );
    }
  };

  useEffect(() => {
    setDate(currentDate(undefined, true));
    // eslint-disable-next-line no-implied-eval
    setInterval("15m_LONG");
  }, []);

  useEffect(() => {
    if (date && interval) {
      getDayPosition(reverseDate(date), interval);
    }
  }, [date, interval]);

  // console.log("summary:", summary);
  // console.log("itemArray: ", itemsArray);

  return (
    <section className="flex w-full h-[850px] sm:h-[800px] items-center relative">
      <div className="w-[50%] absolute top-[180px] left-0">
        <motion.h1
          className="text-5xl text-white font-thicccboi"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Profesjonalne narzędzie do automatycznego tradingu
        </motion.h1>
        <motion.p
          className="text-[12px] w-[80%] sm:text-xs mt-4 xl:text-base text-[#898CA9] font-normal font-thicccboi z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Stań się lepszym traderem przy pomocy sztucznej inteligencji.
          Zaoszczczędź swój czas, kupuj i sprzedawaj przez 24/7, zautomatyzuj
          trading.
        </motion.p>
        <motion.div
          className="flex mt-9 gap-5 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            className="flex items-center justify-center w-32 h-12 sm:w-40 sm:h-12 border-[1px] border-solid border-white rounded-lg overflow-hidden mr-4 sm:m-0 z-10"
            onClick={downloadApp}
          >
            <img src={androidDownload} alt="" />
          </button>
          <div className=" cursor-pointer blur-[2px] bg-white/20 h-12 rounded-lg">
            <p className="flex items-center justify-center w-32 h-12 sm:w-40 sm:h-12 border-[1px] border-solid border-white rounded-lg overflow-hidden">
              <img src={iosDownload} alt="" />
            </p>
          </div>
        </motion.div>
      </div>
      <img
        src={mobileHero}
        className="object-cover h-auto w-[270px] z-20 absolute right-[300px] top-[150px]"
        alt=""
      />
      <div className="flex flex-col bg-white p-2 bg-opacity-20 backdrop-filter backdrop-blur-lg w-[400px] h-[120px] absolute z-20 right-[20px] top-[260px] border border-white/[.2] rounded-lg">
        <div className="flex justify-between text-white">
          <p className="m-0 text-[12px] text-white font-normal font-thicccboi">
            Zyski i Starty
          </p>
          <p className="m-0">{DateTimeConverter(1669581318)}</p>
        </div>
        <div className="mt-2 flex items-center w-full h-[40px] gap-x-4">
          <img className="h-full object-cover" src={atomIcon} alt="" />
          <p className="m-0 text-[18px] text-white font-bold font-thicccboi">
            ATOM
          </p>
          <div className="h-full flex flex-col justify-center ml-8">
            <p className="m-0 flex gap-x-2 text-[12px] text-white font-normal font-thicccboi">
              otwarcie:<b>{timeConverter(1669581318)}</b>
            </p>
            <p className="m-0 flex gap-x-2 text-[12px] text-white font-normal font-thicccboi">
              zamknięcie:<b>{timeConverter(1669581318)}</b>
            </p>
          </div>
          <div className="flex flex-col ml-auto mr-0 items-end">
            <p className="m-0 flex text-[26px] font-medium font-thicccboi text-[#3EA135]">
              +50
            </p>
            <p className="m-0 text-[10px] text-white font-normal font-thicccboi">
              USDT
            </p>
          </div>
        </div>
        <span className="flex w-6 h-6 items-center justify-center mx-auto mt-auto mb-[-5px]">
          <BsFillArrowDownCircleFill
            className="absolute text-white text-lg cursor-pointer z-20"
            onClick={showPopup}
          />
          <BsFillArrowDownCircleFill className="absolute animate-ping text-white z-10" />
        </span>
      </div>
      {/* <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg w-[300px] h-[100px] absolute z-20 right-[550px] top-[550px] border border-white/[.2] rounded-lg"></div> */}
      {passwordPopup && (
        <div className="w-screen h-screen flex fixed z-20 items-center justify-center top-0 left-0">
          <div
            className="w-full h-full fixed bg-black/[.8]"
            onClick={closePopup}
          ></div>
          <div className="bg-white rounded-lg relative p-4 ">
            <p className="text-lg font-normal font-thicccboi mb-2">
              Dostęp tylko dla osób z zamkniętej listy:
            </p>
            <div className="gap-8 flex w-full">
              <input
                type="text"
                className="w-full sm:w-[500px] px-7 rounded-md font-thicccboi text-lg py-4 border-2 border-black"
                placeholder="Kod dostępu"
                value={password}
                onChange={onChange}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={downloadApp}
                type="submit"
                className=" flex justify-center items-center w-[70px] px-7 rounded-md font-thicccboi text-xl py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white"
              >
                Dalej
              </button>
            </div>
          </div>
        </div>
      )}
      {popup ? (
        <div className="w-screen h-screen flex fixed z-30 items-center justify-center top-0 left-0">
          <div
            className="w-full h-full bg-black/[.4] fixed"
            onClick={closePopup}
          ></div>
          <div className="flex flex-col bg-white p-4 w-[70vw] h-[80vh] rounded-lg relative">
            <p className="text-xl text-black text-medium font-thicccboi flex gap-x-4">
              Aktualne zyski i starty użytkowników:
              <Select
                className="text-bold cursor-pointer"
                defaultValue={date}
                onChange={handleChange}
                options={[
                  { value: currentDate(undefined, true), label: currentDate() },
                  { value: currentDate(1, true), label: currentDate(1) },
                  { value: currentDate(2, true), label: currentDate(2) },
                ]}
              />
              <Select
                className="text-bold cursor-pointer"
                defaultValue={interval}
                onChange={handleChange2}
                options={[
                  { value: "15m_LONG", label: "15m LONG" },
                  { value: "15m_SHORT", label: "15m SHORT" },
                  { value: "1h_LONG", label: "1h LONG" },
                  { value: "1h_SHORT", label: "1h SHORT" },
                ]}
              />
            </p>
            <div className="flex w-[280px] items-center justify-center mx-auto">
              <PieChart summaryData={summary} />
            </div>
            <div className="w-full mt-[50px] h-full overflow-auto space-y-1 item__list__scroll">
              {itemsArray.length > 0 ? (
                itemsArray
                  .map((item: any, index: any) => (
                    <>
                      <CoinItem
                        key={index}
                        coinName={item.symbol}
                        openTime={timeConverter(item.start_trading_time)}
                        closeTime={timeConverter(item.finish_trading_time)}
                        position={item.side}
                        reciveTime={timeConverter(item.receive_signal_time)}
                        entryPrice={item.entry_price}
                        takeProfit={item.take_profit_price}
                        stopLoss={item.stop_loss_price}
                      />
                      <div className="w-full h-[2px] rounded-lg bg-[black]/[.4]"></div>
                    </>
                  ))
              ) : (
                <div>...Loading</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};
