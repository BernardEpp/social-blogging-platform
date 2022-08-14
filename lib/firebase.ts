import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDorLPu2ogD0TOnn3Ld84NHBXzMuYS0I-Q",
    authDomain: "fireship-project-a9611.firebaseapp.com",
    projectId: "fireship-project-a9611",
    storageBucket: "fireship-project-a9611.appspot.com",
    messagingSenderId: "722752613300",
    appId: "1:722752613300:web:1ac4c0d05643825e7ae0e1",
    measurementId: "G-JY3DC2N5EF"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();