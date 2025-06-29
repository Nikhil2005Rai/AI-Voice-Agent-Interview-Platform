// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg7kJgtimntlE1n7fmGkIA86Al8wtwu_c",
  authDomain: "prepwise-971f9.firebaseapp.com",
  projectId: "prepwise-971f9",
  storageBucket: "prepwise-971f9.firebasestorage.app",
  messagingSenderId: "212211106633",
  appId: "1:212211106633:web:4290631ed61e68e9bdd098",
  measurementId: "G-M7HCVEQG73"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);