import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnQ-D-vqhuC98ckBMH1csf4WEAsWuBYJk",
  authDomain: "auntentica-6f595.firebaseapp.com",
  projectId: "auntentica-6f595",
  storageBucket: "auntentica-6f595.firebasestorage.app",
  messagingSenderId: "890654734732",
  appId: "1:890654734732:web:1da8d47ee1c7d29a493ea9"
};


const app = initializeApp(firebaseConfig);
///USUARIOS FIREBASE//

const provider = new GoogleAuthProvider();
const auth = getAuth();

export function crearUsuario(email, password){
    return(
        new Promise((res, rej) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
  
                res(user)
                // ...
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                rej(error)
                // ..
            });
        })
    )
}

auth.useDeviceLanguage()
export function logearG(){
    signInWithPopup(auth, provider)
    .then((result) => {

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {

        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}

export function loginEmailPass(email, password){
    return(
        new Promise((res, rej) => {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 

                const user = userCredential.user;

                res(user)
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                rej(error)
            });
        })
    )
}
