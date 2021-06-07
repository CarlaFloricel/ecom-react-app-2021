import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyAd4_2zC35MaC3SeTIRPS4TSIosekwznSc",
    authDomain: "crwn-db-ff46b.firebaseapp.com",
    projectId: "crwn-db-ff46b",
    storageBucket: "crwn-db-ff46b.appspot.com",
    messagingSenderId: "215188291634",
    appId: "1:215188291634:web:4bf179a15eba242df83c2b",
    measurementId: "G-GG2NTFY8SH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
    }
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase