import React, { useEffect, useContext } from "react";
import FbContext from "./context";

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";

// import LoomComponent from "./components/loomComponent";
// import LoginButton from "./components/metamaskLogin";

const ChildComponent = () => {
  const db = useContext(FbContext);
  useEffect(() => {
    console.log("db", db);
    if (db) {
      //   const newCityRef = doc(collection(db, "users"));
      //   setDoc(newCityRef, {
      //     about: "Hiiill123",
      //     discord: "hash",
      //     portfolio: "link",
      //     reviews: [],
      //     tags: ["full-stack"],
      //   }).then((doc) => {
      //     console.log("doc", doc);
      //   });
    }
  }, [db]);
  return <></>;
};

export default ChildComponent;
