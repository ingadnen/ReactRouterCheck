import firebase from "firebase";
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbmksh8KbKHaeKyOzN_iqsE8gCwxTUgTc",
  authDomain: "challengegomycodes.firebaseapp.com",
  projectId: "challengegomycodes",
  storageBucket: "challengegomycodes.appspot.com",
  messagingSenderId: "361203876765",
  appId: "1:361203876765:web:ee5a58335a48e7eb3e6574",
  measurementId: "G-P97QRZCFMD"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
