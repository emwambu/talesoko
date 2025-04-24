// js/firebase.js
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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();