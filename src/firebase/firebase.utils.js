import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDV48sigz4aH7FBbxkrO70sYvDuPqIElQU',
    authDomain: 'crwn-clothing-jdl.firebaseapp.com',
    databaseURL: 'https://crwn-clothing-jdl.firebaseio.com',
    projectId: 'crwn-clothing-jdl',
    storageBucket: 'crwn-clothing-jdl.appspot.com',
    messagingSenderId: '820238560220',
    appId: '1:820238560220:web:1425fd215fba0233117d19',
    measurementId: 'G-VFNHFDHY9P',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (err) {
            console.log('Error creating user.', err.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
