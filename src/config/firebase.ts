import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDn8WFx-8C71VIlhq4Mip1oxVSwVWQEnHA",
  authDomain: "tradingapp-d1497.firebaseapp.com",
  projectId: "tradingapp-d1497",
  storageBucket: "tradingapp-d1497.appspot.com",
  messagingSenderId: "261220844062",
  appId: "1:261220844062:web:bfbbc85dd9fb07b0e4640f",
  measurementId: "G-ZJ7GN661YY",
};

const firebaseApp = initializeApp(firebaseConfig);
// Firebase storage
export const firebaseStorage = getStorage(firebaseApp);
