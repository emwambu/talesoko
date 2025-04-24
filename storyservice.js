// story-service.js
import { db } from './firebase-config.js';
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

// Get all stories
export async function getAllStories() {
  try {
    const storiesQuery = query(
      collection(db, "stories"), 
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(storiesQuery);
    
    const stories = [];
    querySnapshot.forEach((doc) => {
      stories.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, stories };
  } catch (error) {
    console.error("Error getting stories:", error);
    return { success: false, error: error.message };
  }
}

// Get featured stories
export async function getFeaturedStories() {
  try {
    const storiesQuery = query(
      collection(db, "stories"), 
      