// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRam0H3Zk_YSQeW2GxSJUwKSu__nt7EI4',
  authDomain: 'estudiantguia.firebaseapp.com',
  projectId: 'estudiantguia',
  storageBucket: 'estudiantguia.appspot.com',
  messagingSenderId: '354969556002',
  appId: '1:354969556002:web:86d33d982b86a77084267b',
};

// export=enviar
// import=recibir

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

// Flujo de acceso con SDK

export const provider = new GoogleAuthProvider(app);

// Redirección

export const redirect = signInWithRedirect (auth, provider);

// export function registerUser(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password);
// }

// export function loginUser(email, password) {
//   return signInWithEmailAndPassword(auth, email, password);
// }