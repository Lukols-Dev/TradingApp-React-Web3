import { doc, updateDoc, deleteField } from "firebase/firestore";
import { httpAPI } from "../config/axios";
import { cloudFirestore } from "../config/firebase";
//Never use setDoc because you can delete all old data for new one

export class UserDataService {
  //Set subscription id from stripe to firestore cloud
  static setSubscriptionID = async (userID: string, subscriptionID: string) => {
    return await httpAPI.post<any>(`/auth/account/update-subscription`, {
      userID: userID,
      subscriptionID: subscriptionID,
    });
  };
  //Set subscription id from stripe to firestore cloud
  static seCustomerID = (userID: string, customerID: string) => {
    const docRef = doc(cloudFirestore, "USERS", `${userID}`);
    return updateDoc(docRef, {
      customerID: customerID,
    });
  };

  //Get user Data from firestore cloud
  static getUserDataID = async (userID: string) => {
    return await (
      await httpAPI.get<any>(`/auth/account/${userID}`)
    ).data;
  };

  //Update user data Email, Name, Surname
  static updateUserData = async (
    userID: string,
    name: string,
    surname: string
  ) => {
    return (
      await httpAPI.post<string>("/auth/account/id", {
        userID: userID,
        name: name,
        surname: surname,
      })
    ).data;
  };

  static deleteSubscription = async (userID: string) => {
    const docRef = doc(cloudFirestore, "USERS", `${userID}`);
    return updateDoc(docRef, {
      customerID: deleteField(),
      subscriptionID: deleteField(),
    });
  };

  static deleteAccountData = async (userID: string) => {
    return (await httpAPI.delete<any>(`/auth/account/${userID}`)).data;
  };
}
