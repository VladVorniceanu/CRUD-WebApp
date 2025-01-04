import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByTlAExbQIQVTj8TiyfCxqE9hTIQBj07g",
  authDomain: "crud-project-tic.firebaseapp.com",
  projectId: "crud-project-tic",
  storageBucket: "crud-project-tic.firebasestorage.app",
  messagingSenderId: "545917204454",
  appId: "1:545917204454:web:9f6035c135afc787f00827",
  measurementId: "G-BNJZMJEGFD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };