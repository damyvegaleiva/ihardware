import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB20kk-ybbzrpK8eSeQ07MYeY5TgAf_Tck",
  authDomain: "ihardware-database.firebaseapp.com",
  projectId: "ihardware-database",
  storageBucket: "ihardware-database.appspot.com",
  messagingSenderId: "196324704574",
  appId: "1:196324704574:web:ea945fe72bf7d77e50ac6f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
