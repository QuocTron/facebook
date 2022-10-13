import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";
const firebaseConfig = {
    apiKey: "AIzaSyD1GVVlazwv6xi79gMoUcrKQniMizKakp0",
    authDomain: "facebook-ae33d.firebaseapp.com",
    projectId: "facebook-ae33d",
    storageBucket: "facebook-ae33d.appspot.com",
    messagingSenderId: "841762659814",
    appId: "1:841762659814:web:9eb17251c649eb2d95ca27",
    measurementId: "G-5CYHVJMWMF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;