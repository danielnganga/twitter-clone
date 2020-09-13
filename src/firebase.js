// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAD-K0qQOenGPP198wlgRkyF31cY1aSDUA",
    authDomain: "twitter-clone-fd496.firebaseapp.com",
    databaseURL: "https://twitter-clone-fd496.firebaseio.com",
    projectId: "twitter-clone-fd496",
    storageBucket: "twitter-clone-fd496.appspot.com",
    messagingSenderId: "707306224010",
    appId: "1:707306224010:web:c363a0219e289a3ce53073",
    measurementId: "G-JYFBSSN06D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;