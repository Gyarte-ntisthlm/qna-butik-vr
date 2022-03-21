// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { getFirestore, collection, getDoc, doc, updateDoc } from "firebase/firestore";

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
export let globalUser: UserCredential | null = null;

// Login with email and password
export const login = async (id: string, secret: string) => {
  await signInWithEmailAndPassword(auth, id, secret).then((user) => {
    globalUser = user;
    return user;
  });
};

export async function getData(user: any) {
  const docRef = doc(dataCollection, user.user.uid);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}

export async function updateData(user: any, data: any) {
  const docRef = doc(dataCollection, user.user.uid);
  const docSnap = await updateDoc(docRef, data);

  return docSnap;
}


export default app;