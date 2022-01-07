// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBQvlOH12Yej8qb4Kb5_zNwEnu0khWSMMA",
	authDomain: "audiophile-62b6b.firebaseapp.com",
	databaseURL: "https://audiophile-62b6b-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "audiophile-62b6b",
	storageBucket: "audiophile-62b6b.appspot.com",
	messagingSenderId: "1064050838541",
	appId: "1:1064050838541:web:fd565e6ec8a1ceedf8d944",
	measurementId: "G-LW8MN8YVGZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
