// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABCu7hD7jb_HrKt6QumUCIqbEjh_blDWQ",
    authDomain: "naval-nexus.firebaseapp.com",
    projectId: "naval-nexus",
    storageBucket: "naval-nexus.firebasestorage.app",
    messagingSenderId: "495418685160",
    appId: "1:495418685160:web:b86563c39208b7bfb57b5d"
};

// Initialize Firebase
const fbapp = initializeApp(firebaseConfig);
export default fbapp