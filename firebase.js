  // Import the functions you need from the SDKs you need
  import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getAnalytics} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, setDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";
  console.log("js works")
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBZzWS8uAnZW_lC6YE9ikJNel89d1l8IpU",
    authDomain: "colaconest-holidays.firebaseapp.com",
    projectId: "colaconest-holidays",
    storageBucket: "colaconest-holidays.firebasestorage.app",
    messagingSenderId: "724545113880",
    appId: "1:724545113880:web:252ccf1f677d7fa8f8986d",
    measurementId: "G-5NYX53VZPR"
  };



  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 export const db = getFirestore(app);
 export const auth = getAuth(app);
 export const provider = new GoogleAuthProvider();