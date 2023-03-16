import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBU-WjnGNUI7wb04pDOXYKu93oJbLvte0M",
  authDomain: "mental-solutions-equipo-4.firebaseapp.com",
  projectId: "mental-solutions-equipo-4",
  storageBucket: "mental-solutions-equipo-4.appspot.com",
  messagingSenderId: "1078311110432",
  appId: "1:1078311110432:web:ab26222597e5d486813945",
  measurementId: "G-K3JWE8MCYD",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
