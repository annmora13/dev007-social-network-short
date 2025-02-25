import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  addDoc, collection, deleteDoc, getDoc, doc, onSnapshot, updateDoc,
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

export const erasePosts = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const editPost = (id, newFields) => {
  const washingtonRef = doc(db, 'posts', id);
  updateDoc(washingtonRef, {
    contenido: newFields,
  // updateDoc(doc(db, 'posts', id), newFields);
  });
};
