import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCHK14H0gSPuodzx2BMpm8hQhopuDjzzx0",
    authDomain: "my-app-cb6bc.firebaseapp.com",
    databaseURL: "https://my-app-cb6bc.firebaseio.com",
    projectId: "my-app-cb6bc",
    storageBucket: "my-app-cb6bc.appspot.com",
    messagingSenderId: "583021719345"
  };
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;