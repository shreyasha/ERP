import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl9_GbUnDgD2sYaDkxTklLZaOtnb836Eo",
  authDomain: "saavtecherp.firebaseapp.com",
  projectId: "saavtecherp",
  storageBucket: "saavtecherp.firebasestorage.app",
  messagingSenderId: "613618531635",
  appId: "1:613618531635:web:908d052da56bee18c89246",
  measurementId: "G-SH89T521HG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
