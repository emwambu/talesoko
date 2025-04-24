// form-handler.js
import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

export async function handleContactForm(formData) {
  try {
    // Add form data to Firestore
    const docRef = await addDoc(collection(db, "contacts"), {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: serverTimestamp()
    });
    
    console.log("Document written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error: error.message };
  }
}

export function validateForm(form) {
  let isValid = true;
  const fields = form.querySelectorAll('input, textarea');
  
  fields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });
  
  return isValid;
}

export function validateField(field) {
  const errorElement = document.getElementById(`${field.id}-error`);
  
  if (field.required && !field.value.trim()) {
    showError(field, errorElement, 'This field is required');
    return false;
  }
  
  if (field.type === 'email' && !field.checkValidity()) {
    showError(field, errorElement, 'Please enter a valid email');
    return false;
  }
  
  if (field.minLength && field.value.length < field.minLength) {
    showError(field, errorElement, `Minimum ${field.minLength} characters`);
    return false;
  }
  
  if (field.maxLength && field.value.length > field.maxLength) {
    showError(field, errorElement, `Maximum ${field.maxLength} characters`);
    return false;
  }
  
  // Clear error if valid
  field.classList.remove('invalid');
  if (errorElement) errorElement.textContent = '';
  return true;
}

function showError(field, errorElement, message) {
  field.classList.add('invalid');
  if (errorElement) errorElement.textContent = message;
}

export function showAlert(message, type = 'success') {
  // Remove any existing alerts
  const existingAlerts = document.querySelectorAll('.alert');
  existingAlerts.forEach(alert => alert.remove());
  
  // Create new alert
  const alertElement = document.createElement('div');
  alertElement.className = `alert ${type}`;
  alertElement.textContent = message;
  
  // Add to DOM
  document.body.appendChild(alertElement);
  
  // Remove after 5 seconds
  setTimeout(() => {
    alertElement.remove();
  }, 5000);
}