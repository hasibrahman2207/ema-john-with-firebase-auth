// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqGFq50RgGxWyaTmi_tnUZNpm0vZF6Dzk",
  authDomain: "ema-john-with-firebase-a-23c8e.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-23c8e",
  storageBucket: "ema-john-with-firebase-a-23c8e.appspot.com",
  messagingSenderId: "541484648999",
  appId: "1:541484648999:web:a2931cee1ac3ccdb47dc02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;