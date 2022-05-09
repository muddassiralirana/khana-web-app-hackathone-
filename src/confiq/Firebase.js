import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,updatePassword,
    signOut
} from "firebase/auth";
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    query,
    where,
    onSnapshot,
    updateDoc,
    getDoc,
    getDocs,
    deleteDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCo3wBKfQksQG23lYTzto1VKo7yB-heiM4",
    authDomain: "khanasabkliye-58ef9.firebaseapp.com",
    databaseURL: "https://khanasabkliye-58ef9-default-rtdb.firebaseio.com",
    projectId: "khanasabkliye-58ef9",
    storageBucket: "khanasabkliye-58ef9.appspot.com",
    messagingSenderId: "856824925024",
    appId: "1:856824925024:web:b9cd80d8a91bb56c6e6c05",
    measurementId: "G-KKZJ5ZB90N"
  };
initializeApp(firebaseConfig)
const db = getFirestore();
const auth = getAuth();
export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    db,
    collection,
    doc,
    setDoc,
    query,
    where,
    onSnapshot,
    updateDoc,
    getDoc,
    deleteDoc,updatePassword,getDocs
};