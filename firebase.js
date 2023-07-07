// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAolOlPh5lSrlXxW9hAMrCmBo75WeqztWc",
  authDomain: "careerapptracker.firebaseapp.com",
  projectId: "careerapptracker",
  storageBucket: "careerapptracker.appspot.com",
  messagingSenderId: "301812714208",
  appId: "1:301812714208:web:39ca85e23900a0d49a1e85",
  measurementId: "G-N7QW5TFX4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

const auth = getAuth(app);
export { auth }