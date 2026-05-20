import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {apiKey: "AIzaSyDBmP7cdRmWxzE6TCzo_wkaFMc-BK23wKM",
  authDomain: "dynamic-portfolio-f7622.firebaseapp.com",
  projectId: "dynamic-portfolio-f7622",
  storageBucket: "dynamic-portfolio-f7622.firebasestorage.app",
  messagingSenderId: "1029190217129",
  appId: "1:1029190217129:web:cee5379ee79d2b7c6028b8"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);