import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJzA5MBUYq5YKpXNZsIXnJqfHShah88M0",
    authDomain: "autenticacao-50daa.firebaseapp.com",
    projectId: "autenticacao-50daa",
    storageBucket: "autenticacao-50daa.appspot.com",
    messagingSenderId: "508598619188",
    appId: "1:508598619188:web:694095d873116727778e61",
    measurementId: "G-XRVKYMTDJ4"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };