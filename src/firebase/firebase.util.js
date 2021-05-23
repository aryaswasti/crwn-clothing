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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;