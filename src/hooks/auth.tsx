import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { auth, GoogleAuthProvider } from "../services/firebase";
import { createUser } from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
  photo: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  user: User | null;
  signInWithGoogle(): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  async function signInWithGoogle() {
    await auth
      .signInWithPopup(GoogleAuthProvider)
      .then((response) => {
        if (!response.user) throw new Error("Error loading user data");

        const { uid, displayName, email, photoURL } = response.user;

        if (!displayName || !email || !photoURL)
          throw new Error("Missing information from Google Account");

        setUser({ id: uid, name: displayName, email, photo: photoURL });
        createUser({ email, name: displayName, history: [], photo: photoURL });
      })
      .catch((err) => console.log(err));
  }

  async function signOut() {
    await auth
      .signOut()
      .then(() => setUser(null))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    auth.onAuthStateChanged((loggedInUser) => {
      if (loggedInUser) {
        const { uid, displayName, email, photoURL } = loggedInUser;

        if (!displayName || !email || !photoURL)
          throw new Error("Missing information from Google Account");

        setUser({ id: uid, name: displayName, email, photo: photoURL });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) throw new Error("useAuth must be used inside AuthProvider");

  return auth;
}

export { AuthProvider, useAuth };
