import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKSSvvMf1CT7ElwLQQIgwaA0MtaIgdew0",
  authDomain: "telzir-353100.firebaseapp.com",
  projectId: "telzir-353100",
  storageBucket: "telzir-353100.appspot.com",
  messagingSenderId: "296266684564",
  appId: "1:296266684564:web:bec885e3692b55551cbc81",
  measurementId: "G-EGRHRGQLHN",
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth(app);
