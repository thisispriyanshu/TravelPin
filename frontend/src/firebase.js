// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPs1yrSGHNGyDEtRsYlbb7Pt2pRXP-OfE",
  authDomain: "travel-your-pin.firebaseapp.com",
  projectId: "travel-your-pin",
  storageBucket: "travel-your-pin.appspot.com",
  messagingSenderId: "160433312194",
  appId: "1:160433312194:web:b9425056c34cb140d8c65b",
  measurementId: "G-8QRPEZE4JQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);