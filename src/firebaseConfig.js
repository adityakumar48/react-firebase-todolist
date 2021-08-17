import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBcQWLFNl3CNbqWORiUJWC0GR9-taK8RAI",
    authDomain: "todo-list-new-bfbb1.firebaseapp.com",
    projectId: "todo-list-new-bfbb1",
    storageBucket: "todo-list-new-bfbb1.appspot.com",
    messagingSenderId: "801653584268",
    appId: "1:801653584268:web:441f2645cb5eea750126a9"
  };

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()

  export { db }