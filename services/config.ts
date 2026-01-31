import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.apiKey,
  projectId: process.env.apiKey,
  storageBucket: process.env.apiKey,
  messagingSenderId: process.env.apiKey,
  appId: process.env.apiKey,
  measurementId: process.env.apiKey,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

export const TASKS_COLLECTION =  "tasks";