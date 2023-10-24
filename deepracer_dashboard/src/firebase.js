// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8NZLnuFrtjcwI6L4KEoLzU6G52xEmADw",

  authDomain: "deepracer-52ec7.firebaseapp.com",

  projectId: "deepracer-52ec7",

  storageBucket: "deepracer-52ec7.appspot.com",

  messagingSenderId: "360179328106",

  appId: "1:360179328106:web:8e1ae9d5dd9fc007fb1613",

  measurementId: "G-QC67M0JHRT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Export auth and app for use in other parts of your application
export { auth };
export default app;
