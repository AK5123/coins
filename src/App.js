import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";

const App = () => {
  useEffect(() => {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBGDmhnkbctGz7HwPw5r4zqOJ6TFh7pVf4",
      authDomain: "coinbooks-d57aa.firebaseapp.com",
      projectId: "coinbooks-d57aa",
      storageBucket: "coinbooks-d57aa.appspot.com",
      messagingSenderId: "285706128772",
      appId: "1:285706128772:web:3c14f05cef73f40f8661d1",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    setDoc(doc(db, "users", "LAAA"), {
      about: "Hi",
      discord: "hash",
      portfolio: "link",
      reviews: [],
    }).then((doc) => {
      console.log("doc", doc);
    });

    console.log("app", db, collection(db, "users"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
