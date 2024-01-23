// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkWHgvid6eWQUdiZdf1_v0Z5FdOgZHmjw",
  authDomain: "netflix-gpt-d14a5.firebaseapp.com",
  projectId: "netflix-gpt-d14a5",
  storageBucket: "netflix-gpt-d14a5.appspot.com",
  messagingSenderId: "541093180774",
  appId: "1:541093180774:web:8ec5e897ceecc8652204a7",
  measurementId: "G-9KV4TLLFD2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
