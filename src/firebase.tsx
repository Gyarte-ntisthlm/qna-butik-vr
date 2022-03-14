// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRhboKRXYsiaFqD00fIpXhnYZsh012OO4",
  authDomain: "butik-vr.firebaseapp.com",
  databaseURL: "https://butik-vr-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "butik-vr",
  storageBucket: "butik-vr.appspot.com",
  messagingSenderId: "866478350237",
  appId: "1:866478350237:web:13dac5646e5de73f0ed974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const dataCollection = collection(db, "data");

// Helper functions

// Login with email and password
export const login = (id: string, secret: string) => {
  return signInWithEmailAndPassword(auth, id, secret);
};

export async function getData() {
  let data;
    onAuthStateChanged(auth, async (user) => {
        if (user) {
          // Get the data that belongs to the user
          // Return that data.
          data = getDoc(doc(dataCollection, user.uid));
        } else {
          // Return null
          data = null;
        }
      });
    return data;
}

export default app;