import  firebase from 'firebase';



var firebaseConfig = {
  apiKey: "AIzaSyDsdUd6xE2Er7mknTGtoha7XaS8o9qWid8",
  authDomain: "react-realtime-app-76707.firebaseapp.com",
  databaseURL: "https://react-realtime-app-76707-default-rtdb.firebaseio.com",
  projectId: "react-realtime-app-76707",
  storageBucket: "react-realtime-app-76707.appspot.com",
  messagingSenderId: "686490435585",
  appId: "1:686490435585:web:cd2329c18954a6bac04000",
};
// Initialize Firebase
let db=firebase.initializeApp(firebaseConfig);
export default db.database().ref();
