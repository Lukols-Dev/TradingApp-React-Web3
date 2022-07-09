import { FC } from "react";
import { HeroSection } from "./sections";

export const Home: FC = () => {
  return (
    <div className="w-full bg-[red] flex flex-col justify-between">
      <HeroSection />
    </div>
  );
};
