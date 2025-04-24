// Import Firebase App module from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_jj3fpq2VBpSVvTemxkxOjnLqct7Nd9c",
  authDomain: "talesoko-f8a98.firebaseapp.com",
  projectId: "talesoko-f8a98",
  storageBucket: "talesoko-f8a98.firebasestorage.app",
  messagingSenderId: "812197190940",
  appId: "1:812197190940:web:492ccdc8811f256f442ed9",
  measurementId: "G-LKHPDCV9HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized for Talesoko");
