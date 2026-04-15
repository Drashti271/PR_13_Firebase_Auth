import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS4q7WXj4njwwz3ngwzexo6Q3ov_XXQfk",
  authDomain: "fir-auth-8752e.firebaseapp.com",
  projectId: "fir-auth-8752e",
  storageBucket: "fir-auth-8752e.appspot.com",
  messagingSenderId: "466109900217",
  appId: "1:466109900217:web:099da1b11043a9d7bc8268"
};

const app = initializeApp(firebaseConfig);

// ✅ FIX HERE
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();