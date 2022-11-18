import { httpAPI } from "../config/axios";

export class LearningDataService {
  static getLearningData = async () => {
    return (await httpAPI.get<any>(`/auth/learning`)).data;
  };
}
