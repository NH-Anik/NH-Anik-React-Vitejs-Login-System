// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQVzkLr7-DHTpzN57I8B34zD3qMupCv6c",
  authDomain: "auth-project-first-8f63d.firebaseapp.com",
  projectId: "auth-project-first-8f63d",
  storageBucket: "auth-project-first-8f63d.appspot.com",
  messagingSenderId: "466227183639",
  appId: "1:466227183639:web:e715ff56930f2278f71c52",
  measurementId: "G-MHLNXNTKVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;