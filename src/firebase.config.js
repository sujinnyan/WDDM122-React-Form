import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDWrpNpryiry03JygCeAItr-EMYyvJaqJI",
  authDomain: "furniture-market-48d1e.firebaseapp.com",
  projectId: "furniture-market-48d1e",
  storageBucket: "furniture-market-48d1e.appspot.com",
  messagingSenderId: "1069664362485",
  appId: "1:1069664362485:web:9435630b7d04e27b51cabc"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result)=> {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
    })
    .catch((error) => {
        console.log(error);
 });
};