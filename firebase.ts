import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDj0qZRQyBeHIsrzeeBKimxX0aGO5FmRL8",
	authDomain: "aisthetic-task.firebaseapp.com",
	projectId: "aisthetic-task",
	storageBucket: "aisthetic-task.appspot.com",
	messagingSenderId: "479964785626",
	appId: "1:479964785626:web:0721cc915b7a4657dceee3"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { auth, firebaseApp };
