import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "cc-twiter.firebaseapp.com",
    projectId: "cc-twiter",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const authService = { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider };