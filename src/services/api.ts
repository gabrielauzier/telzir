import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { DDDTypes, PlanTypes } from "../utils/types";
import { auth, database } from "./firebase";

interface SimulationModel {
  origin: DDDTypes;
  destiny: DDDTypes;
  duration: number;
  plan: PlanTypes;
  createdAt: Date;
}

interface UserModel {
  name: string;
  email: string;
  photo: string;
  history: SimulationModel[];
}

export async function createUser({ name, email, photo, history }: UserModel) {
  const userRef = doc(database, "users", auth.currentUser!.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    try {
      await setDoc(doc(database, "users", auth.currentUser!.uid), {
        name,
        email,
        photo,
        history,
      });
      console.error("User doc created successfully");
    } catch (err) {
      console.error("Error adding user document: ", err);
    }
  }
}

export async function updateHistory(simulation: SimulationModel) {
  if (auth.currentUser) {
    const userRef = doc(database, "users", auth.currentUser.uid);

    try {
      await updateDoc(userRef, {
        history: arrayUnion(simulation),
      });
      console.log("History item added successfully");
    } catch (err) {
      console.error("Error adding history item: ", err);
    }
  } else {
    console.log("Login to save your history");
  }
}

export async function removeItemFromHistory(itemId: number) {
  if (auth.currentUser) {
    const userRef = doc(database, "users", auth.currentUser.uid);

    await getUserHistoryData().then((response) => {
      const result = response.filter(
        (item: any, index: number) => index !== itemId
      );

      try {
        setDoc(userRef, {
          history: result,
        });
        console.log("History item removed successfully");
      } catch (err) {
        console.error("Error removing history item: ", err);
      }
    });
  }
}

export async function getUserHistoryData() {
  if (auth.currentUser) {
    const userRef = doc(database, "users", auth.currentUser.uid);

    const response = await getDoc(userRef)
      .then((userSnap) => userSnap.data())
      .then((data) => {
        return data?.history;
      })
      .catch((err) => console.error(err));

    return response;
  } else {
    console.log("Login to access your history");
  }
}
