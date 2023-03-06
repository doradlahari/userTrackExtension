import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCN8EtpjbbxkkqBE8WQza8nnzF9LMuI4eA",
  authDomain: "tracking-user-80c56.firebaseapp.com",
  projectId: "tracking-user-80c56",
  storageBucket: "tracking-user-80c56.appspot.com",
  messagingSenderId: "656553292446",
  appId: "1:656553292446:web:9d160a2e3eb4135bd5c18f",
  measurementId: "G-SB39Q1WVWY",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
