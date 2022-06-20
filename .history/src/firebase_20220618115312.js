import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.,
  authDomain: process.env.,
  projectId: process.env.,
  storageBucket: process.env.,
  messagingSenderId: process.env.,
  appId: "1:172919738620:web:17f83fa87bf2593028c779"
};

const app = initializeApp(firebaseConfig);