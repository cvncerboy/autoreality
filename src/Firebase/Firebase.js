import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr7OyOmpzlbSmdn8CI3cOoa0CNq4E_3CQ",
  authDomain: "kookinary-login.firebaseapp.com",
  projectId: "kookinary-login",
  storageBucket: "kookinary-login.appspot.com",
  messagingSenderId: "264661773877",
  appId: "1:264661773877:web:f74b9fe0f96a9ebdbecb7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(app);

export {provider}