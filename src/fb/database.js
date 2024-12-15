// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, updateDoc, addDoc } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "naval-nexus.firebaseapp.com",
    projectId: "naval-nexus",
    storageBucket: "naval-nexus.firebasestorage.app",
    messagingSenderId: "495418685160",
    appId: "1:495418685160:web:b86563c39208b7bfb57b5d"
};

const fbapp = initializeApp(firebaseConfig);
const db = getFirestore(fbapp);
const postsRef = collection(db, 'posts');
const posts = await getDocs(postsRef);
const fetchPost = async docID => {
    const docRef = doc(db, 'posts', docID);
    return await getDoc(docRef);
}
const updatePost = async (docID, content) => {
    const docRef = doc(db, 'posts', docID);
    return await updateDoc(docRef, content);
}
const createPost = async content => {
    const colRef = collection(db, 'posts');
    return await addDoc(colRef, content)
}


// Initialize Firebase
export { posts, fetchPost, updatePost, createPost }