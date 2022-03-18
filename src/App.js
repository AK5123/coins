import React, { useEffect, useState, createContext } from "react";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import htmlToDraft from 'html-to-draftjs';

import {
    getFirestore,
    collection,
    getDocs,
    doc,
    setDoc,
} from "firebase/firestore";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import Onboarding from "./components/Onboarding/Onboarding";

import FbContext from "./context";
import ChildComponent from "./child";
import OnBoarding from "./pages/onboarding";
import OverView from "./pages/overviewPage";
import ConnectWallet from "./pages/ConnectWallet/ConnectWallet";

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
        setDb(db);
        // const newCityRef = doc(collection(db, "users"));

        // setDoc(newCityRef, {
        //   about: "Hiii",
        //   discord: "hash",
        //   portfolio: "link",
        //   reviews: [],
        //   tags: ["full-stack"],
        // }).then((doc) => {
        //   console.log("doc", doc);
        // });

        // console.log("app", db, collection(db, "users"));
    }, []);

    const [db, setDb] = useState(null);

    return (
        <FbContext.Provider value={db}>
            <div className="App">
                {/* <SideBar /> */}
                <Routes>
                    <Route path="/" element={<ConnectWallet />} />
                    <Route
                        path="/app/:address"
                        element={<Onboarding />}
                    ></Route>
                    <Route path="onboarding" element={<SideBar />}>
                        <Route path="hello" element={<Onboarding />} />
                    </Route>
                </Routes>
            </div>
        </FbContext.Provider>
    );
};

export default App;
