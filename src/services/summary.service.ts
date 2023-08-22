import { httpAPI } from "../config/axios";

export class SummaryDataService {
  static getDayPositions = async (currDay: string, interval: string) => {
    return await httpAPI.get<any>(`/summary/day`, {
      params: {
        currDay: currDay,
        interval: interval,
      },
    });
  };
}
