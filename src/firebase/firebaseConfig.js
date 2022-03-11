const firebaseConfig = {
    apiKey: "AIzaSyCSy74BKIi3Qfn0wTY0b_4HPtZBK8dVVUk",
    authDomain: "moviedb-project-5a3ec.firebaseapp.com",
    projectId: "moviedb-project-5a3ec",
    storageBucket: "moviedb-project-5a3ec.appspot.com",
    messagingSenderId: "423039375083",
    appId: "1:423039375083:web:0d368c6f5a663fc58e90ae"
};

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore();

export { app, db };