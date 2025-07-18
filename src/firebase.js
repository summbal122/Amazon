// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT0pm-ccdLuo6BGwG1ceg7d_2AN2E0XXY",
  authDomain: "fir-16fc3.firebaseapp.com",
  projectId: "fir-16fc3",
  storageBucket: "fir-16fc3.firebasestorage.app",
  messagingSenderId: "474147473759",
  appId: "1:474147473759:web:a447fdf15cce751c380eea",
  measurementId: "G-RHPNFC23TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);