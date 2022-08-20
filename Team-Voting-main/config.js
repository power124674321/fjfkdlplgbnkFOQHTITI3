import firebase from 'firebase';

// add SDK Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_Yzf26VLuhkMLww1q51WEO0EqwTX_dZI",
    authDomain: "schoolattendance-3af59.firebaseapp.com",
    databaseURL: "https://schoolattendance-3af59-default-rtdb.firebaseio.com",
    projectId: "schoolattendance-3af59",
    storageBucket: "schoolattendance-3af59.appspot.com",
    messagingSenderId: "1015087844540",
    appId: "1:1015087844540:web:2931f8370a58c8166b14b9",
    measurementId: "G-54E6ELD1CB"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();