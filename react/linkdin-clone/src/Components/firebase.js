import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCxgKrCPkCMkNoDSvlp7cN28jHpAAPeuMU",
    authDomain: "linkedin-clone-41ba7.firebaseapp.com",
    projectId: "linkedin-clone-41ba7",
    storageBucket: "linkedin-clone-41ba7.appspot.com",
    messagingSenderId: "1036512622785",
    appId: "1:1036512622785:web:efb1052f307100925efc40",
    measurementId: "G-VNYSCSRZVG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
