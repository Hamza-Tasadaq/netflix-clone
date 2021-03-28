import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAtLe_ei3LogIFZWbrBeWsawECkHkgXymk",
    authDomain: "netflix-clone-1d712.firebaseapp.com",
    projectId: "netflix-clone-1d712",
    storageBucket: "netflix-clone-1d712.appspot.com",
    messagingSenderId: "960357949423",
    appId: "1:960357949423:web:80abecf2c4efbf850f601a"
};


const firebaeApp = firebase.initializeApp(firebaseConfig)
const auth = firebaeApp.auth()
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export default auth;
export { facebookProvider }