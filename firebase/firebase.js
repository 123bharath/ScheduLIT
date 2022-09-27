import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjW6BX5tOwRxmgrdlez8jogmDvzRrjB0Y",
  authDomain: "internship-dev-e59b3.firebaseapp.com",
  projectId: "internship-dev-e59b3",
  storageBucket: "internship-dev-e59b3.appspot.com",
  messagingSenderId: "186839654247",
  appId: "1:186839654247:web:fd90f4bda6074d52b119c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
