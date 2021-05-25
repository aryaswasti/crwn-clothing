import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBw_eRHMslGer4_8iS34p4kaXxFs2mucUc",
    authDomain: "crwn-db-1419b.firebaseapp.com",
    projectId: "crwn-db-1419b",
    storageBucket: "crwn-db-1419b.appspot.com",
    messagingSenderId: "245109280148",
    appId: "1:245109280148:web:78cb63dbe82afd4f069381",
    measurementId: "G-49MD0YVHN6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('ERROR creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;