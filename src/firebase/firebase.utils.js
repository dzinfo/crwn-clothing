import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import userEvent from "@testing-library/user-event";

const config = {
    apiKey: "AIzaSyBUB-h7IEzU79Pn8QNyaq7S4FVhGzdtpgc",
    authDomain: "crwn-db-3fe30.firebaseapp.com",
    projectId: "crwn-db-3fe30",
    storageBucket: "crwn-db-3fe30.appspot.com",
    messagingSenderId: "260258022010",
    appId: "1:260258022010:web:90f6a9a79cd70fb431f1c3",
    measurementId: "G-69TTED4KVX"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)
        return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    return userRef;
}

export default firebase;