// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOdk3lV68cytIov2RNuxR8SqoO3Zro7-I",
  authDomain: "linkedin-clone-68.firebaseapp.com",
  projectId: "linkedin-clone-68",
  storageBucket: "linkedin-clone-68.appspot.com",
  messagingSenderId: "41018337051",
  appId: "1:41018337051:web:55792fba234f58c63415be",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
