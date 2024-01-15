// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbQXGXOmUI8cIWMLg6QB9zjZMs3TJAL9s",
  authDomain: "talk-679e7.firebaseapp.com",
  projectId: "talk-679e7",
  storageBucket: "talk-679e7.appspot.com",
  messagingSenderId: "75289359508",
  appId: "1:75289359508:web:9ab22c1e163c9bb2743081"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore();