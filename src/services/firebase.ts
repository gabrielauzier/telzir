import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  // your firebase config
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const auth = getAuth(app);
