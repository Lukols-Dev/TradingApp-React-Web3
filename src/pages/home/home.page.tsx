import { FC } from "react";
import {
  AboutAppSection,
  CoinsSection,
  DiscordSection,
  EmptySection,
  InfoSection,
  LearningSection,
} from "./sections";
import { HeroSectionNew } from "./sections/hero-new.section";

export const Home: FC = () => {
  return (
    <div className="w-full flex flex-col justify-between relative overflow-hidden">
      <HeroSectionNew />
      <CoinsSection />
      <InfoSection />
      <LearningSection />
      <AboutAppSection />
      <DiscordSection />
      <EmptySection />
      <svg
        className=" hidden absolute right-[200px] top-[130px] xl:inline"
        width="61"
        height="60"
        viewBox="0 0 61 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.5 0L32.8344 24.4567L52.0668 8.7868L36.1357 27.7039L61 30L36.1357 32.2961L52.0668 51.2132L32.8344 35.5433L30.5 60L28.1656 35.5433L8.93324 51.2132L24.8643 32.2961L0 30L24.8643 27.7039L8.93324 8.7868L28.1656 24.4567L30.5 0Z"
          fill="white"
        />
      </svg>

      <svg
        className="hidden  xl:inline absolute right-[100px] top-[400px]"
        width="54"
        height="56"
        viewBox="0 0 54 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.4708 0.294922C34.0714 13.2625 30.5357 19.7292 26.9708 19.7292C23.4058 19.7292 19.8701 13.2625 13.5 0.294922C19.8701 13.2625 22.9091 20.1056 21.1266 23.6982C19.3442 27.2908 12.7695 27.6672 0 27.6672C13.237 27.6672 19.8117 28.0436 21.3019 32.0125C22.7045 35.7078 19.6656 42.5166 13.5 55.0395C19.8993 42.0718 23.4351 35.6051 27 35.6051C30.5649 35.6051 34.1007 42.0718 40.5 55.0395C33.7208 41.2507 30.7403 34.4076 33.2532 30.9861C35.474 27.9751 42.0195 27.6672 54 27.6672C40.5 27.6672 33.9253 27.2566 32.6104 23.0481C31.4123 19.2844 34.4513 12.5098 40.4708 0.294922Z"
          fill="white"
        />
      </svg>
      <svg
        className="hidden  xl:inline absolute right-[800px] top-[500px]"
        width="61"
        height="60"
        viewBox="0 0 61 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.5 0L32.8344 24.4567L52.0668 8.7868L36.1357 27.7039L61 30L36.1357 32.2961L52.0668 51.2132L32.8344 35.5433L30.5 60L28.1656 35.5433L8.93324 51.2132L24.8643 32.2961L0 30L24.8643 27.7039L8.93324 8.7868L28.1656 24.4567L30.5 0Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
