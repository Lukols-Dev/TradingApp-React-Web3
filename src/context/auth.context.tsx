import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, FC, useEffect, useState } from "react";
import { firebaseAuth } from "../config/firebase";
import { User } from "../types/user.types";

export type UserAccount = {
  user: User;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
};

export const AuthContext = createContext<UserAccount | undefined>(undefined);

interface UserAuthContextProviderProps {
  children: React.ReactNode;
}

export const UserAuthContextProvider: FC<UserAuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<any>({});

  // Log In function
  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  // Log Out function
  const logOut = () => {
    const keysToRemove = ["sub", "cus"];
    keysToRemove.forEach((k) => localStorage.removeItem(k));
    return signOut(firebaseAuth);
  };
  //
  const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    unsubscribe();
  }, [unsubscribe]);

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
