import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBccJXfLmp2NNvekjwB4gt8DbxsJKIiOfQ",
  authDomain: "final-project-bedrossian.firebaseapp.com",
  projectId: "final-project-bedrossian",
  storageBucket: "final-project-bedrossian.appspot.com",
  messagingSenderId: "1035887497006",
  appId: "1:1035887497006:web:c8820849024b0861e434bf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);