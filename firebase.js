// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKwciu2qDNfc3JjPJVIuUVYDv0qbd-u1Q",
  authDomain: "perspiscal.firebaseapp.com",
  projectId: "perspiscal",
  storageBucket: "perspiscal.appspot.com",
  messagingSenderId: "351046629819",
  appId: "1:351046629819:web:a5cdaeb306b4a82d832c9e"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else {
    app = firebase.app();
}

const auth = firebase.auth();
export { auth }