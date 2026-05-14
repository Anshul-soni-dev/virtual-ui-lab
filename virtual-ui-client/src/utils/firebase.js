// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "virtual-ai-9f241.firebaseapp.com",
  projectId: "virtual-ai-9f241",
  storageBucket: "virtual-ai-9f241.firebasestorage.app",
  messagingSenderId: "223876366541",
  appId: "1:223876366541:web:68f7f826620d9fa681e984"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}