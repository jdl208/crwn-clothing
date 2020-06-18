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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
