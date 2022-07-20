import { FC } from "react";
import {
  AboutAppSection,
  DiscordSection,
  EmptySection,
  HeroSection,
  InfoSection,
  LearningSection,
} from "./sections";

export const Home: FC = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      <HeroSection />
      <InfoSection />
      <LearningSection />
      <AboutAppSection />
      <DiscordSection />
      <EmptySection />
    </div>
  );
};
