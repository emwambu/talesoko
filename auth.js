// auth.js
import { app } from './firebase-config.js';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged in!");
    closeAuthModal();
  } catch (err) {
    alert("Login failed: " + err.message);
  }
};

window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created!");
    closeAuthModal();
  } catch (err) {
    alert("Signup failed: " + err.message);
  }
};

window.loginWithGoogle = async function () {
  try {
    await signInWithPopup(auth, provider);
    alert("Google Sign-In successful!");
    closeAuthModal();
  } catch (err) {
    alert("Google Sign-In failed: " + err.message);
  }
};

window.resetPassword = async function () {
  const email = document.getElementById("email").value;
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent!");
  } catch (err) {
    alert("Password reset failed: " + err.message);
  }
};
