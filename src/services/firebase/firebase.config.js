import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkGFqLlhAd0pWt7Ze8C87jwnTnApWwqMI",
  authDomain: "the-shoe-store-32f10.firebaseapp.com",
  projectId: "the-shoe-store-32f10",
  storageBucket: "the-shoe-store-32f10.appspot.com",
  messagingSenderId: "134218657269",
  appId: "1:134218657269:web:35c0c307aee05cc92904bc",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
