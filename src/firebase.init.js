// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCIdegGymisgXFDRkGbst9MX9kOgNUd4Jg",
//   authDomain: "royal-convention-hall.firebaseapp.com",
//   projectId: "royal-convention-hall",
//   storageBucket: "royal-convention-hall.appspot.com",
//   messagingSenderId: "915126498332",
//   appId: "1:915126498332:web:e3cd447bd735bce7851bd9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
//  export default app;
 

 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7sZxCvSLy_h1HBzU5Sups64JdvQdnAjc",
  authDomain: "crystal-palace-383ee.firebaseapp.com",
  projectId: "crystal-palace-383ee",
  storageBucket: "crystal-palace-383ee.appspot.com",
  messagingSenderId: "553034009060",
  appId: "1:553034009060:web:90e8dad67dcb779675dff1",
  measurementId: "G-E5NBMWPLXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 export default app;