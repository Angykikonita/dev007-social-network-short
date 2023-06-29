// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDTip05dHN7dqeUxJPFt2GyobZdfAKu8Yw",
  authDomain: "proyectoshort-55d0f.firebaseapp.com",
  projectId: "proyectoshort-55d0f",
  storageBucket: "proyectoshort-55d0f.appspot.com",
  messagingSenderId: "739324984623",
  appId: "1:739324984623:web:e76f55fc4f35c56a2cb5da",
  measurementId: "G-EWG6PDJQDJ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);