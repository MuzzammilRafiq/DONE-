import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB5N8zOgGtwecIyIKtGDD4sJpY8C9E52hQ",
    authDomain: "reddit-clone-79bd8.firebaseapp.com",
    projectId: "reddit-clone-79bd8",
    storageBucket: "reddit-clone-79bd8.appspot.com",
    messagingSenderId: "360175843263",
    appId: "1:360175843263:web:875183d0f165e561c7d30a",
    measurementId: "G-05JZK7LXBM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { db , auth }; 
