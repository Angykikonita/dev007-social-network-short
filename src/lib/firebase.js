// Import the functions you need from the SDKs you need
//import { isUidIdentifier } from 'firebase-admin/lib/auth/identifier';
import { initializeApp } from 'firebase/app';
import { getAuth, updateCurrentUser } from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
  doc
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: 'AIzaSyCXH0UJ31GniRmyQVnY7jVSbpcs9B5L8g4',
  authDomain: 'proyectocorto-8146e.firebaseapp.com',
  projectId: 'proyectocorto-8146e',
  storageBucket: 'proyectocorto-8146e.appspot.com',
  messagingSenderId: '510365200419',
  appId: '1:510365200419:web:55c92171fc148f0f8d8196',

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
console.log(auth);

export const saveTextarea = (textarea, idUsuario, email) => addDoc(collection(db, 'text'), { textarea, fecha: new Date(), idUsuario, email });

export const deletePost = (Id) => deleteDoc(doc(db, 'text', Id));
const posteos = collection(db, 'text');

//export const email = (Id) => 
//const emailUser = collection(db, 'userName');

export const ordenamiento = (callback) => onSnapshot(query(posteos, orderBy('fecha', 'desc')), callback);
console.log(ordenamiento);