// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7-yTCmB55YwaEmqYW47ogF9aLEld2_hM",
  authDomain: "small-ecommerce-801ab.firebaseapp.com",
  projectId: "small-ecommerce-801ab",
  storageBucket: "small-ecommerce-801ab.firebasestorage.app",
  messagingSenderId: "733927952278",
  appId: "1:733927952278:web:fe035211e191fe585d17b7",
  measurementId: "G-1FHYNE4QX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);