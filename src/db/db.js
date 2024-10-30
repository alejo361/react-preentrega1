// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDunWkp9iRqsdVeMnVG7FqT1XrZqne0llpG8",
    authDomain: "ecom-coder-6ceb06.firebaseapp.com",
    projectId: "ecom-coder-6ec06",
    storageBucket: "ecom-coder-6eb06.appspot.com",
    messagingSenderId: "1094601156226",
    appId: "1:1094602856286:web:cd54b51e14cd45a922f77b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;