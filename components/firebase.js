import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBOF_UmhBgUWSoyV_qqKUq4qIY8Tm_1guc",
  authDomain: "chatapptest-c1c37.firebaseapp.com",
  projectId: "chatapptest-c1c37",
  storageBucket: "chatapptest-c1c37.appspot.com",
  messagingSenderId: "1079882846237",
  appId: "1:1079882846237:web:f4298a0b792646a3f976f4",
  measurementId: "G-ZHLPVZPNKX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service (db)
export const db = getFirestore(app);

// Get a reference to the Firebase auth object
export const auth = getAuth();
