import firebase from 'firebase'


firebase.initializeApp({
    apiKey: "AIzaSyCKjY8LzX7KPVV0Nl7pbfcYcriEXfhv7Nc",
    authDomain: "book-ef127.firebaseapp.com",
    projectId: "book-ef127",
    storageBucket: "book-ef127.appspot.com",
    messagingSenderId: "562120030790",
    appId: "1:562120030790:web:5a6f2d7037a3a7fc9b6847"
  })

const db =firebase.firestore()


export { db }