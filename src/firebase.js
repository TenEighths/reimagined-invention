import firebase from 'firebase/app';
import 'firebase/database';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyANItI0IcSYFebXAmIFo241AlhEaCV2GJE",
    authDomain: "simple-blog-true.firebaseapp.com",
    projectId: "simple-blog-true",
    storageBucket: "simple-blog-true.appspot.com",
    messagingSenderId: "950931176327",
    appId: "1:950931176327:web:1778585679925a1230b122"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;
