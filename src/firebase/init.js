// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9J4OkebbJmxyfjDgpelV04KwlqLZcylA",
  authDomain: "fir-practise-7fd73.firebaseapp.com",
  projectId: "fir-practise-7fd73",
  storageBucket: "fir-practise-7fd73.appspot.com",
  messagingSenderId: "14176679590",
  appId: "1:14176679590:web:848680365668b00195a667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();