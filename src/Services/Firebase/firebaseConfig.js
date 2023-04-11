import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDnwHdTvLHlQgHlvctnGgUtU11oPtjadxs",
  authDomain: "ecommerce-app-174b2.firebaseapp.com",
  projectId: "ecommerce-app-174b2",
  storageBucket: "ecommerce-app-174b2.appspot.com",
  messagingSenderId: "650372449474",
  appId: "1:650372449474:web:543cefe1b00457cd5e675b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)