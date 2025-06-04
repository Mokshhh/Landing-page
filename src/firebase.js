// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLK-9Y5FlDu7vf8uFIYUQIOM3ASShWGHU",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "wealth-setu-landing-page",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "SENDER_ID",
  appId: "wealth-setu-landing-page",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
