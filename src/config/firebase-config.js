// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKAZKpK5Ppxcux3wY8x3POCljuuqREbtI",
  authDomain: "expense-tracker-ca335.firebaseapp.com",
  projectId: "expense-tracker-ca335",
  storageBucket: "expense-tracker-ca335.firebasestorage.app",
  messagingSenderId: "216548716689",
  appId: "1:216548716689:web:28afd4f60a41b190c80f30",
  measurementId: "G-J902YCTLGL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
