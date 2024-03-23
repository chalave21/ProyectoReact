import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1bL3w2V8Ko2WPJ2Cmsy5ZDuKuVf_UJcU",
  authDomain: "react-54030.firebaseapp.com",
  projectId: "react-54030",
  storageBucket: "react-54030.appspot.com",
  messagingSenderId: "116156055783",
  appId: "1:116156055783:web:fedf6da9aeaf6598626242",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
