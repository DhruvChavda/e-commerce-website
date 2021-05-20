import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB0cetLQAR7OeXVRAd_CiBwgDA5W1OXu28",
    authDomain: "e-commerce-db-cca17.firebaseapp.com",
    projectId: "e-commerce-db-cca17",
    storageBucket: "e-commerce-db-cca17.appspot.com",
    messagingSenderId: "8467715993",
    appId: "1:8467715993:web:dbbca1e5ae6adfa5d3a508",
    measurementId: "G-N9KQ21YCWS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
