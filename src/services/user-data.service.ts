import { doc, getDoc, updateDoc, deleteField } from "firebase/firestore";
import { cloudFirestore } from "../config/firebase";
//Never use setDoc because you can delete all old data for new one

export class UserDataService {
  //Set subscription id from stripe to firestore cloud
  static setSubscriptionID = (userID: string, subscriptionID: string) => {
    const docRef = doc(cloudFirestore, "TEST", `${userID}`);
    return updateDoc(docRef, {
      subscriptionID: subscriptionID,
    });
  };
  //Set subscription id from stripe to firestore cloud
  static seCustomerID = (userID: string, customerID: string) => {
    const docRef = doc(cloudFirestore, "TEST", `${userID}`);
    return updateDoc(docRef, {
      customerID: customerID,
    });
  };

  //Get user Data from firestore cloud
  static getUserDataID = async (userID: string) => {
    const docRef = doc(cloudFirestore, "TEST", `${userID}`);
    return await getDoc(docRef);
  };

  static deleteSubscription = async (userID: string) => {
    const docRef = doc(cloudFirestore, "TEST", `${userID}`);
    return updateDoc(docRef, {
      customerID: deleteField(),
      subscriptionID: deleteField(),
    });
  };
}
