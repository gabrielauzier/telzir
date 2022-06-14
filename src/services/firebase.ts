import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKSSvvMf1CT7ElwLQQIgwaA0MtaIgdew0",
  authDomain: "telzir-353100.firebaseapp.com",
  projectId: "telzir-353100",
  storageBucket: "telzir-353100.appspot.com",
  messagingSenderId: "296266684564",
  appId: "1:296266684564:web:bec885e3692b55551cbc81",
  measurementId: "G-EGRHRGQLHN",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
export const auth = firebase.auth();

export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
