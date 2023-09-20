import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYuDMd2MrhVIc5AUj38IyCpDNQff0p4GI",
  authDomain: "spotyfans-59a0f.firebaseapp.com",
  projectId: "spotyfans-59a0f",
  storageBucket: "spotyfans-59a0f.appspot.com",
  messagingSenderId: "132425761762",
  appId: "1:132425761762:web:7b99b8a64dcfe169c86fbb",
  measurementId: "G-H8XZXD46N9"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const analytics = getAnalytics(firebase);