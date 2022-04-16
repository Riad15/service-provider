// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSkdO9t_m2dBFhiz_XnBIqM_83LbWv3Jk",
    authDomain: "doctor-appointment-b5adb.firebaseapp.com",
    projectId: "doctor-appointment-b5adb",
    storageBucket: "doctor-appointment-b5adb.appspot.com",
    messagingSenderId: "58995938422",
    appId: "1:58995938422:web:241165fa0e931d0c8dfb57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;