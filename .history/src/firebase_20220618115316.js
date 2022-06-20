import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.,
  authDomain: process.env.,
  projectId: process.env.,
  storageBucket: process.env.,
  messagingSenderId: process.env.,
  appId: process.env.
};

const app = initializeApp(firebaseConfig);