import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
let db = false;
export const getDb = () => {
if(!db){
    const firebaseConfig = {
        apiKey: "AIzaSyA-w1HblSupy0x1d34qSEuGgCxS0WU3ZIs",
        authDomain: "kehilaclass.firebaseapp.com",
        projectId: "kehilaclass",
        storageBucket: "kehilaclass.appspot.com",
        messagingSenderId: "454335887736",
        appId: "1:454335887736:web:7acea09f72a7f4a8ca708d",
        measurementId: "G-KM93B4RL1E"
    };

    const app = initializeApp(firebaseConfig)

    db = getFirestore(app)
}

return db
}