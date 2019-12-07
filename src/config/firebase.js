import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCRx5TD5TLf-Ij1NMFdsca320LQiQxbKTw",
  authDomain: "revents-260719.firebaseapp.com",
  databaseURL: "https://revents-260719.firebaseio.com",
  projectId: "revents-260719",
  storageBucket: "revents-260719.appspot.com",
  messagingSenderId: "603696888547",
  appId: "1:603696888547:web:46959f50a8f21edd1f63d6",
  measurementId: "G-XRKX2RNT0R"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore();

export default firebase;
