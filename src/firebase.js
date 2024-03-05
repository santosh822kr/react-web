import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'reactjs-chat-webapp.firebaseapp.com',
  projectId: 'reactjs-chat-webapp',
  storageBucket: 'reactjs-chat-webapp.appspot.com',
  messagingSenderId: '854466422513',
  appId: '1:854466422513:web:07e3fe219893ee6f6ceb50',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBTIN0dRdTc9F89qMkJNbvxraNiSsG3K34",
//   authDomain: "reactjs-chat-webapp.firebaseapp.com",
//   projectId: "reactjs-chat-webapp",
//   storageBucket: "reactjs-chat-webapp.appspot.com",
//   messagingSenderId: "854466422513",
//   appId: "1:854466422513:web:07e3fe219893ee6f6ceb50"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
