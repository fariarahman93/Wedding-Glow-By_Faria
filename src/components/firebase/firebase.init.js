// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7rTc-_wdZsKctdGhHxBmTD_KvIqIdELI",
  authDomain: "wedding-glow.firebaseapp.com",
  projectId: "wedding-glow",
  storageBucket: "wedding-glow.appspot.com",
  messagingSenderId: "365116288292",
  appId: "1:365116288292:web:31e18a733efcf1e83157b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;