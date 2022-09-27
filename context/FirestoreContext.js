import { collection, onSnapshot, query } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase/firebase";

const FirestoreContext = createContext();
export const useFirestoreContext = () => useContext(FirestoreContext);
export function FirestoreProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "events"));
    setLoading(true);
    const unsub = onSnapshot(q, (querysnapshot) => {
      let responseData = [];
      querysnapshot.forEach((doc) => {
        let event_closed = false;
        if (
          new Date(
            `${doc.data().event_end_date}T${doc.data().event_end_time}:00`
          ) < new Date()
        ) {
          event_closed = true;
        }
        responseData.push({ data: doc.data(), id: doc.id, event_closed });
      });
      setData(responseData);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const value = { data, loading };
  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  );
}
