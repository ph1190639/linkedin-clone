import firebase from 'firebase/compat/app';  // Use 'compat' for compatibility mode
import 'firebase/compat/firestore';  // Use 'compat' for compatibility mode
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBf9jpc3yBDxkrF3ClawJHZ_fEGx4sICD8",
  authDomain: "linkedin-19170.firebaseapp.com",
  projectId: "linkedin-19170",
  storageBucket: "linkedin-19170.appspot.com",
  messagingSenderId: "990172162802",
  appId: "1:990172162802:web:3a1f503ddc431beb57be6b",
  measurementId: "G-KX7R3PGGFV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, firebase };