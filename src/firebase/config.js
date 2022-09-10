// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqVozJUzmTgMm-pX5JnJ1GngUjhA_-jps",
  authDomain: "alborghettistore.firebaseapp.com",
  projectId: "alborghettistore",
  storageBucket: "alborghettistore.appspot.com",
  messagingSenderId: "485843744498",
  appId: "1:485843744498:web:1633bd64b6b8ce2da2026b",
  measurementId: "G-JWMP8ZJK5K"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebseDB = getFirestore(firebaseApp);
export const firebaseAnalytics = getAnalytics(firebaseApp);