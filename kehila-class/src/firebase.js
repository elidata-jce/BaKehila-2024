// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-w1HblSupy0x1d34qSEuGgCxS0WU3ZIs",
    authDomain: "kehilaclass.firebaseapp.com",
    projectId: "kehilaclass",
    storageBucket: "kehilaclass.appspot.com",
    messagingSenderId: "454335887736",
    appId: "1:454335887736:web:7acea09f72a7f4a8ca708d",
    measurementId: "G-KM93B4RL1E"
};

// Initialize Firebase
const initFirebase = () => {
    const app =  initializeApp(firebaseConfig);
    return getFirestore(app);
}

export default initFirebase;


