import { initializeApp } from "firebase/app"; //instantiation
import {getAuth} from 'firebase/auth'; //Firebase Auth Api
import {initializeFirestore,getFirestore} from 'firebase/firestore'; //Firebase firestore Api
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCUfIJoXfy9_CDDXqKxNF5TdO2yvH6p7ps",
  authDomain: "bloodbank-6c4f3.firebaseapp.com",
  databaseURL: "https://bloodbank-6c4f3-default-rtdb.firebaseio.com",
  projectId: "bloodbank-6c4f3",
  storageBucket: "bloodbank-6c4f3.appspot.com",
  messagingSenderId: "173148239008",
  appId: "1:173148239008:web:0e29d5b1d281c3441405c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app); // Merge auth functionality to blank firebase app

export const fireStoreDB= getFirestore(app);

export const fireBaseStorage= getStorage(app);