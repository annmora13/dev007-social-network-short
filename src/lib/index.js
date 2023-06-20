import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { app, auth, db } from '../firebase';

// FLujo de acceso con DSK export const provider = new GoogleAuthProvider(app);

export const iniciarSesionConGoogle = () => {
  const provider = new GoogleAuthProvider(app);
  return signInWithPopup(auth, provider);
};

export const createPost = (contenido) => {
  const 
  return addDoc(collection(db, 'posts'), {
    contenido: contenido,
  });
};
