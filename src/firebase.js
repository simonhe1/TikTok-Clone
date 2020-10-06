import firebase from "firebase";
require("dotenv").config();

// const firebaseConfig = {
//     apiKey: `${process.env.FIREBASE_APIKEY}`,
//     authDomain: `${process.env.FIREBASE_AUTH_DOMAIN}`,
//     databaseURL: `${process.env.FIREBASE_DATABASE_URL}`,
//     projectId: `${process.env.FIREBASE_PROJECT_ID}`,
//     storageBucket: `${process.env.FIREBASE_STORAGE_BUCKET}`,
//     messagingSenderId: `${process.env.FIREBASE_MESSAGING_SENDER_ID}`,
//     appId: `${process.env.FIREBASE_APP_ID}`
//   };
const firebaseConfig = {
  apiKey: "AIzaSyDjtonvPyh9m093TveFdlcliNfXdpQN8LA",
  authDomain: "tiktok-clone-ab6ce.firebaseapp.com",
  databaseURL: "https://tiktok-clone-ab6ce.firebaseio.com",
  projectId: "tiktok-clone-ab6ce",
  storageBucket: "tiktok-clone-ab6ce.appspot.com",
  messagingSenderId: "1034328150911",
  appId: "1:1034328150911:web:be0818300d69850512404a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { storage, auth };
export default db;
