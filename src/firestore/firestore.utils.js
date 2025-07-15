import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyCMhhfLogvQd4ngS6JgzUXgZUOQvJDD38k",
    authDomain: "crwn-db-953c7.firebaseapp.com",
    projectId: "crwn-db-953c7",
    storageBucket: "crwn-db-953c7.firebasestorage.app",
    messagingSenderId: "148726253280",
    appId: "1:148726253280:web:9a31f7a056ccd2fd8fb285",
    measurementId: "G-4E90TQ6YXN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.getCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);