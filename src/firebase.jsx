// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiKd-Yd7tZkC6k8rjtsGPztcL5i0l5Z5E",
  authDomain: "attendance-testing-92b14.firebaseapp.com",
  projectId: "attendance-testing-92b14",
  storageBucket: "attendance-testing-92b14.appspot.com",
  messagingSenderId: "578326838869",
  appId: "1:578326838869:web:8a86f06a97ca291b6c5edc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export firestore database
// It will be imported whenever it is needed by the react app 
export const db = getFirestore(app);

