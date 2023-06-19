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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
