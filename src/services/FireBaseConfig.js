import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8R_1mBnaVizBwS3zeW_1ZId082WPu38A",
  authDomain: "proyecto-final-facundo-jimenez.firebaseapp.com",
  projectId: "proyecto-final-facundo-jimenez",
  storageBucket: "proyecto-final-facundo-jimenez.appspot.com",
  messagingSenderId: "426721999064",
  appId: "1:426721999064:web:6b14312dd475c11da67fad",
  measurementId: "G-SEDK90ZGTD"
};

const App = initializeApp(firebaseConfig);
export const db = getFirestore(App);