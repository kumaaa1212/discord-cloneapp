import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAnrGMV9sDCgOGAQO5YRaQDEjAo6pPQjFc",
  authDomain: "discord-clone-7e751.firebaseapp.com",
  projectId: "discord-clone-7e751",
  storageBucket: "discord-clone-7e751.appspot.com",
  messagingSenderId: "133435442635",
  appId: "1:133435442635:web:89547bad87d84e462b224e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };