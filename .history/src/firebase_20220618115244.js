import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.,
  authDomain: "trello-2f230.firebaseapp.com",
  projectId: "trello-2f230",
  storageBucket: "trello-2f230.appspot.com",
  messagingSenderId: "172919738620",
  appId: "1:172919738620:web:17f83fa87bf2593028c779"
};

const app = initializeApp(firebaseConfig);