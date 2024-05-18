import { initializeApp } from "firebase/app"
import { getDatabase, ref, onValue } from "firebase/database"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyANOKTL4jPjWqF7ND8NosHq_b9vkiQF-t8",
    authDomain: "esp32-reactnative.firebaseapp.com",
    projectId: "esp32-reactnative",
    storageBucket: "esp32-reactnative.appspot.com",
    messagingSenderId: "418919153268",
    appId: "1:418919153268:web:82ac3204d63930d00ddb21"
};

//Initialize firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue };