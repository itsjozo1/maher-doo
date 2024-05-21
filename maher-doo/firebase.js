// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL8KRAwNfRi8yK7lpcYUBrqldjuLvUvME",
  authDomain: "maher-doo-80a11.firebaseapp.com",
  projectId: "maher-doo-80a11",
  storageBucket: "maher-doo-80a11.appspot.com",
  messagingSenderId: "758896332303",
  appId: "1:758896332303:web:88d22fe25573c13ed99d7a",
  measurementId: "G-NWHZXMWRKM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
