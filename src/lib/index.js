import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  addDoc, collection, doc, onSnapshot,
} from 'firebase/firestore';
import { app, auth, db } from '../firebase';

// FLujo de acceso con DSK export const provider = new GoogleAuthProvider(app);

export const iniciarSesionConGoogle = () => {
  const provider = new GoogleAuthProvider(app);
  return signInWithPopup(auth, provider);
};

export const createPost = (text) => (
  addDoc(collection(db, 'posts'), {
    contenido: text,
  })
);

export const getPosts = (callback) => onSnapshot(collection(db, 'posts'), callback);
