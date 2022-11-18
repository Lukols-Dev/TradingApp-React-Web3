import { FC } from "react";

interface LearningCardProps {
  title?: string;
  description?: string;
  url?: string;
}

export const LearningCard: FC<LearningCardProps> = ({
  title,
  description,
  url,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[293px] h-[143px] px-[15px] py-[11px] flex flex-col rounded-lg bg-white"
    >
      <header className="w-full h-[36px] flex justify-between items-center">
        <div className="text-lg text-black font-roboto font-bold flex justify-center items-center">
          {title}
        </div>
      </header>
      <div className="mt-4 text-xs text-black/[.7] font-roboto font-medium flex justify-center items-center overflow-auto">
        {description}
      </div>
    </a>
  );
};
