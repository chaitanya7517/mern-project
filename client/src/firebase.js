// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a6c65.firebaseapp.com",
  projectId: "mern-estate-a6c65",
  storageBucket: "mern-estate-a6c65.appspot.com",
  messagingSenderId: "118906791765",
  appId: "1:118906791765:web:93e842cfe0d98daa1071dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);