import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB39e-WuBGU_BtobDNcR0fRrvDVvOBJBbw",
    authDomain: "azbay-5493b.firebaseapp.com",
    projectId: "azbay-5493b",
    storageBucket: "azbay-5493b.appspot.com",
    messagingSenderId: "1077647142426",
    appId: "1:1077647142426:web:fed1740a49118d653beba3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;