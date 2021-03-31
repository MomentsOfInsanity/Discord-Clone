import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAzKYw2CXrdKgXRFtBjFgTWzf9KxiCqhwA",
  authDomain: "discord-clone-yt-a9ae9.firebaseapp.com",
  projectId: "discord-clone-yt-a9ae9",
  storageBucket: "discord-clone-yt-a9ae9.appspot.com",
  messagingSenderId: "76312587150",
  appId: "1:76312587150:web:a1045005390d61a3de12df",
  measurementId: "G-9Y1QB2Y0V7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;