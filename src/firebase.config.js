import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8a9Uu1-4AAhTCnN1mfHdd8gRXqLFxxh4",
  authDomain: "fir-a8ca8.firebaseapp.com",
  projectId: "fir-a8ca8",
  storageBucket: "fir-a8ca8.appspot.com",
  messagingSenderId: "475830178752",
  appId: "1:475830178752:web:3d9b648b45e08b505e6e25",
  measurementId: "G-G89ZTKWZGR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
