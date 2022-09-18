import { httpAPI } from "../config/axios";

export class UserAuthService {
  static authEmailPassword = (email: string, password: string) => {
    return httpAPI.post<any>("auth/login", {
      email: email,
      password: password,
    });
  };

  static logOutUser = () => {
    return httpAPI.post<any>("auth/logout");
  };
}
