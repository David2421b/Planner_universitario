// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI_eBh0k2Uv5ICW6eW1hUtrqVSuLCPk0o",
  authDomain: "planner-universitario-db.firebaseapp.com",
  databaseURL: "https://planner-universitario-db-default-rtdb.firebaseio.com",
  projectId: "planner-universitario-db",
  storageBucket: "planner-universitario-db.firebasestorage.app",
  messagingSenderId: "139930732817",
  appId: "1:139930732817:web:d1e34a0693b85fcfbee4b0",
  measurementId: "G-77JE1DBVE2"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appfirebase);

export default appfirebase