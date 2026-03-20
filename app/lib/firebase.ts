import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkDijnWa_jQdphVAKuhW0JcsyVonepkAM",
  authDomain: "pawsos-296e1.firebaseapp.com",
  projectId: "pawsos-296e1",
  storageBucket: "pawsos-296e1.firebasestorage.app",
  messagingSenderId: "527397284782",
  appId: "1:527397284782:web:f7e7168def038a6cc3b63f"
}
const app = initializeApp(firebaseConfig);

// 🔹 Export Auth
export const auth = getAuth(app);

// 🔹 Export Google Provider
export const googleProvider = new GoogleAuthProvider();

// 🔹 Export Firestore
export const db = getFirestore(app);

export const storage = getStorage(app);