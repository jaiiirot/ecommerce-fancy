/* import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsTrVRcBgZ2vGpuDBUNLMLkGAQuNFU2tc",
  authDomain: "clase13-a4762.firebaseapp.com",
  projectId: "clase13-a4762",
  storageBucket: "clase13-a4762.appspot.com",
  messagingSenderId: "774205919521",
  appId: "1:774205919521:web:ab68cc87f3b8aad42dee60",
  measurementId: "G-NT4158JSY0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTRAR USUARIO
function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

//LOGEAR USUARIO
function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          const email = user.email;
          console.log(uid);
          console.log(email);
        } else {
          console.log("dadada");
        }
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

export { signIn, createUser };
 */
