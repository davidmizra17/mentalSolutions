import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpilGqEht5i4lY5wQ6dlkskncjamF_hs4",
  authDomain: "rick-morty-api-21b69.firebaseapp.com",
  projectId: "rick-morty-api-21b69",
  storageBucket: "rick-morty-api-21b69.appspot.com",
  messagingSenderId: "564903118067",
  appId: "1:564903118067:web:afbdbe4c5201492922e386",
  measurementId: "G-ZGK97M8SGH",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
