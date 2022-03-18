import {
    getFirestore,
    collection,
    getDoc,
    getDocs,
    doc,
    setDoc,
    query,
    where,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
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
export const firestoreDB = getFirestore(app);

export const addUser = async (
    db,
    metamask,
    nickname,
    about,
    portfolio,
    tags
) => {
    let user = await setDoc(
        doc(db, "users", metamask),
        {
            nickname,
            about,
            portfolio,
            reviews: [],
            tags,
        },
        { merge: true }
    );
    return user;
};

export const getUser = async (db, metamask) => {
    const docRef = doc(db, "users", metamask);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
    return null;
};

export const getDao = async (db, id) => {
    const docRef = doc(db, "dao", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
    return null;
};

// For real-time listening
// const q = query(collection(db, "cities"), where("state", "==", "CA"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const cities = [];
//   querySnapshot.forEach((doc) => {
//       cities.push(doc.data().name);
//   });
//   console.log("Current cities in CA: ", cities.join(", "));
// });

export const addApplyDao = async (
    db,
    id,
    name,
    owner,
    ownerEmail,
    description
) => {
    let dao = await setDoc(
        doc(db, "dao", id),
        {
            owner,
            ownerEmail,
            name,
            description,
        },
        { merge: true }
    );
};

export const addCompleteDao = async (db, id, walkthrough, calendar, about) => {
    let dao = await setDoc(
        doc(db, "dao", id),
        {
            video: walkthrough,
            calendar,
            about,
        },
        { merge: true }
    );
};

export const checkAdminUser = async (userId) => {
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
    const db = getFirestore();
    const dao = collection(db, "dao");
    const q = query(dao, where("owner", "==", userId));
    const querySnapshot = await getDocs(q);
    let res = [];
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        res.push({ ...doc.data(), id: doc.id });
    });
    return res || [];
};

// Reviews
const addReview = async (db, from, to, content) => {
    const reviewRef = doc(collection(db, "reviews"));
    let review = await setDoc(
        reviewRef,
        {
            from,
            to,
            review: content,
        },
        { merge: true }
    );
};

const getReviewForUser = async (db, userId) => {
    const q = query(collection(db, "reviews"), where("to", "==", userId));
    const querySnapshot = await getDocs(q);
    let res = querySnapshot.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        return doc.data();
    });
    return res;
};
