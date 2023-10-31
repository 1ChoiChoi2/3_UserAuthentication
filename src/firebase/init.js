// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDddf7-k21xyk4mfWjBykb5dDDEbN41yK8",
  authDomain: "react-authentication-e2578.firebaseapp.com",
  projectId: "react-authentication-e2578",
  storageBucket: "react-authentication-e2578.appspot.com",
  messagingSenderId: "955737925229",
  appId: "1:955737925229:web:34002da28387ba3af44164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();