import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyARL7N0WzvaLv2HnvKP0K9JYnd4ibNWX90",
  authDomain: "discord-clone-94b08.firebaseapp.com",
  databaseURL: "https://discord-clone-94b08.firebaseio.com",
  projectId: "discord-clone-94b08",
  storageBucket: "discord-clone-94b08.appspot.com",
  messagingSenderId: "748152374765",
  appId: "1:748152374765:web:bc5b8a4785cc6aa60d53e4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db