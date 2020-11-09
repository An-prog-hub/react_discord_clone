import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzjV89CRQ1YuS7IR6Dy7TwWeqI8TgSvCE",
  authDomain: "discord-clone-ac.firebaseapp.com",
  databaseURL: "https://discord-clone-ac.firebaseio.com",
  projectId: "discord-clone-ac",
  storageBucket: "discord-clone-ac.appspot.com",
  messagingSenderId: "106755205818",
  appId: "1:106755205818:web:346a514e6a5160bd383083",
  measurementId: "G-0DTLH76G6X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
