import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDf3TCZi7IQ4GQKOnfA9k2HNQ_njAH-w3I",
    authDomain: "pruebag-220b6.firebaseapp.com",
    databaseURL: "https://pruebag-220b6-default-rtdb.firebaseio.com",
    projectId: "pruebag-220b6",
    storageBucket: "pruebag-220b6.appspot.com",
    messagingSenderId: "693624137151",
    appId: "1:693624137151:web:c676f73ce9ee620499ad0a"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
