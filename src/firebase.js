import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAd8eeuoKxjRLvPwZ0WzJKZLT66ZI-Iw0E",
  authDomain: "collegeproject-491c3.firebaseapp.com",
  projectId: "collegeproject-491c3",
  storageBucket: "collegeproject-491c3.appspot.com",
  messagingSenderId: "149407319528",
  appId: "1:149407319528:web:b5752491326227d91c905d",
  measurementId: "G-S00RYT1T5W"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;