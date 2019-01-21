import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB3td0R8fWieHgxG519q45ak1nfvcqvioU",
    authDomain: "expensify-90dc1.firebaseapp.com",
    databaseURL: "https://expensify-90dc1.firebaseio.com",
    projectId: "expensify-90dc1",
    storageBucket: "expensify-90dc1.appspot.com",
    messagingSenderId: "1003054682222"
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };