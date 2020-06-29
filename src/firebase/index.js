import Vue from 'vue';
import {  firestorePlugin  } from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(firestorePlugin)
firebase.initializeApp({
    apiKey: "AIzaSyDcNatzUMXfxrUsnGaOVIlupuuU9SuG5YY",
    authDomain: "the-answers-6fd77.firebaseapp.com",
    databaseURL: "https://the-answers-6fd77.firebaseio.com",
    projectId: "the-answers-6fd77",
    storageBucket: "the-answers-6fd77.appspot.com",
    messagingSenderId: "183694992184",
    appId: "1:183694992184:web:ab13ac6a4318e11cc197cd",
    measurementId: "G-T1P5MTVN3Z"
   })
   export const db = firebase.firestore()