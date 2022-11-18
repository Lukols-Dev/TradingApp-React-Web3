import { FC, useEffect, useState } from "react";
import { LearningCard } from "../../components/common/cards/card-learning";
import { LearningDataService } from "../../services/learning.service";
import { ILearning } from "../../types/global.types";

export const Learning: FC = () => {
  const [learningData, setLearningData] = useState<ILearning[]>([]);

  const getLeardningData = async () => {
    const resp = await LearningDataService.getLearningData();
    setLearningData(resp);
  };

  useEffect(() => {
    getLeardningData();
  }, []);
  return (
    <div className="h-full ml-[20px] mr-[50px] flex flex-col overflow-auto">
      <h2 className="max-w-[576px] mt-20 text-2xl font-roboto font-semibold text-black">
        Za sukcesem stoi też wiedza, dlatego przygotowaliśmy dla Was materiały
        szkoleniowe:
      </h2>
      <div className="w-full h-full mt-10 flex gap-9">
        {learningData.map((item: ILearning) => (
          <LearningCard
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};
