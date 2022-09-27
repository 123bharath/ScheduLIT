import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setCurrentUser(res) : setCurrentUser(null);
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  function signUp(email, name, password) {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => updateProfile(auth.currentUser, { displayName: name }))
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  function signIn(email, password) {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  function logout() {
    signOut(auth);
  }

  const value = {
    currentUser,
    loading,
    error,
    signUp,
    signIn,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
