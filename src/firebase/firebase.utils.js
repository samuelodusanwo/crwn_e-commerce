import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyBGxwqhJBkAW_DwO_dL6CYUs2-25gQpzYc",
    authDomain: "crwn-db-3af11.firebaseapp.com",
    projectId: "crwn-db-3af11",
    storageBucket: "crwn-db-3af11.firebasestorage.app",
    messagingSenderId: "805417394050",
    appId: "1:805417394050:web:61d9b3c3adfcc50316799b",
    measurementId: "G-S6C90GXJ7E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = doc(firestore, `users/${userAuth.uid}`)
    const snapShot = await getDoc(userRef)

    if(!snapShot.exists()) {
        const { username, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                username,
                email,
                createdAt,
                ...additionalData
            })
            console.log("Successfully created account!!!")
        } catch (error) {
            console.log("Error message: ", error.message)
        }
    }

    return userRef;
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);