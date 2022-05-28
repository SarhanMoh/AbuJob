// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUguFgQRMsXAS-cKzYBzBv6Pez-vK64Y0",
  authDomain: "abujobs-dd666.firebaseapp.com",
  projectId: "abujobs-dd666",
  storageBucket: "abujobs-dd666.appspot.com",
  messagingSenderId: "346944185317",
  appId: "1:346944185317:web:a8458763624138e571850c",
  measurementId: "G-L0V6BJP4ZQ"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app()
}
const auth = firebase.auth();
const dataBase = firebase.firestore();

// const analytics = getAnalytics(app);
export {auth, dataBase};