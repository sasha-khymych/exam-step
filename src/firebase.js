import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZJa8x40QqGoRy7hNF-Vob8M1vqb3xEig",
    authDomain: "exam-onlineshop.firebaseapp.com",
    projectId: "exam-onlineshop",
    storageBucket: "exam-onlineshop.appspot.com",
    messagingSenderId: "575994044781",
    appId: "1:575994044781:web:df6bee5be1f403be777a64"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};