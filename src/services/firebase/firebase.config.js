import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "the-shoe-store-32f10.firebaseapp.com",
  projectId: "the-shoe-store-32f10",
  storageBucket: "the-shoe-store-32f10.appspot.com",
  messagingSenderId: process.env.REACT_APP_MSG_ID,
  appId: process.env.REACT_APP_API_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
