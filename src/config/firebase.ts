import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_TEST,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN_TEST,
  projectId: process.env.REACT_APP_PROJECT_ID_TEST,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_TEST,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_TEST,
  appId: process.env.REACT_APP_APP_ID_TEST,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID_TEST,
};
// Firebase app
const firebaseApp = initializeApp(firebaseConfig);
// Firebase storage
export const firebaseStorage = getStorage(firebaseApp);
// Firebase cloud firestore
export const cloudFirestore = getFirestore(firebaseApp);
// Firebase auth
export const firebaseAuth = getAuth(firebaseApp);
