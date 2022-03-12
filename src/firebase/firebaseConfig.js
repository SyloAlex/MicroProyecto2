import firebase from "firebase";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCSy74BKIi3Qfn0wTY0b_4HPtZBK8dVVUk',
  authDomain: 'moviedb-project-5a3ec.firebaseapp.com',
  projectId: 'moviedb-project-5a3ec',
  storageBucket: 'moviedb-project-5a3ec.appspot.com',
  messagingSenderId: '423039375083',
  appId: '1:423039375083:web:0d368c6f5a663fc58e90ae',
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const auth = app.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { app, db, auth, googleProvider };
