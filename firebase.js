// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4w2EeB4MQIWGtWe19kFRKaDa5QXjDu10",
    authDomain: "test-app-80880.firebaseapp.com",
    projectId: "test-app-80880",
    storageBucket: "test-app-80880.firebasestorage.app",
    messagingSenderId: "797668525703",
    appId: "1:797668525703:web:3efa1755814bdf98635a22",
    measurementId: "G-3FJQ4H2MFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);