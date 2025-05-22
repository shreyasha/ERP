// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl9_GbUnDgD2sYaDkxTklLZaOtnb836Eo",
  authDomain: "saavtecherp.firebaseapp.com",
  projectId: "saavtecherp",
  storageBucket: "saavtecherp.firebasestorage.app",
  messagingSenderId: "613618531635",
  appId: "1:613618531635:web:908d052da56bee18c89246",
  measurementId: "G-SH89T521HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);