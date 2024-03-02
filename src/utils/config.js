import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  query,
  where,
  updateDoc,
  setDoc,
  addDoc,
} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBl35L5dJW1TvFJU833lcMcQ1sLfK605jI',
//   authDomain: 'prayukti-23.firebaseapp.com',
//   projectId: 'prayukti-23',
//   storageBucket: 'prayukti-23.appspot.com',
//   messagingSenderId: '25486691189',
//   appId: '1:25486691189:web:ebdc2a5589ed0a3689e13c',
// };

const firebaseConfigure = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfigure);
export const auth = getAuth(app);
// sign in with google
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    hd: 'bitsathy.ac.in',
  });
  signInWithRedirect(auth, provider)
    .then((_) => {})
    .catch((_) => {});
};
// firebase firestore
export const firestore = getFirestore(app);
// export const firestore = '';
export const firestoreDoc = (path) => doc(firestore, ...path);
export const firestoreGetDocs = (path, queries) => {
  return getDocs(query(collection(firestore, ...path), where(...queries)));
};
export const firestoreUpdateDoc = (path, data) =>
  updateDoc(doc(firestore, ...path), data);
export const firestoreSetDoc = (data, path) => setDoc(path, data);
export const firestoreAddDoc = (path, data) => {
  return addDoc(collection(firestore, path), data);
};
// firebase storage
export const storage = getStorage(app);
