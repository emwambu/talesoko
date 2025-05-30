// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_jj3fpq2VBpSVvTemxkxOjnLqct7Nd9c",
  authDomain: "talesoko-f8a98.firebaseapp.com",
  projectId: "talesoko-f8a98",
  storageBucket: "talesoko-f8a98.appspot.com",
  messagingSenderId: "812197190940",
  appId: "1:812197190940:web:492ccdc8811f256f442ed9",
  measurementId: "G-LKHPDCV9HL"
};

export const app = initializeApp(firebaseConfig);
export const firebaseConfigObject = firebaseConfig;
export default firebaseConfig;