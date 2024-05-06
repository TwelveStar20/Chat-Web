import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBLL9O1LIyoGN34FmW6Suhk7aRmEN7SMno",
    authDomain: "react-contact-8c0d8.firebaseapp.com",
    projectId: "react-contact-8c0d8",
    storageBucket: "react-contact-8c0d8.appspot.com",
    messagingSenderId: "195407396990",
    appId: "1:195407396990:web:bed7eb852e6ce84b14582f"
  };


const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref();