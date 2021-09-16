// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import { initializeApp } from 'firebase/app';
// import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyBG7Sm-K0NpHozAuMILatIAeywwrBeM-50",
//     authDomain: "appcrud-11d29.firebaseapp.com",
//     projectId: "appcrud-11d29",
//     storageBucket: "appcrud-11d29.appspot.com",
//     messagingSenderId: "900726405612",
//     appId: "1:900726405612:web:765c4128ea4fb3842068c9"
// };

// Initialize Firebase
// const fireDb = initializeApp(firebaseConfig);
// let fireDb = firebase.initializeApp(firebaseConfig);

// export default fireDb.database().ref()

// export default fireDb.database().ref()



import firebase from 'firebase';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBG7Sm-K0NpHozAuMILatIAeywwrBeM-50",
    authDomain: "appcrud-11d29.firebaseapp.com",
    databaseURL: "https://appcrud-11d29-default-rtdb.firebaseio.com",
    projectId: "appcrud-11d29",
    storageBucket: "appcrud-11d29.appspot.com",
    messagingSenderId: "900726405612",
    appId: "1:900726405612:web:765c4128ea4fb3842068c9"
};

// Initialize Firebase
let fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref()