import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app, auth } from '../firebase';

// FLujo de acceso con DSK export const provider = new GoogleAuthProvider(app);

export const iniciarSesionConGoogle = () => {
  const provider = new GoogleAuthProvider(app);
  return signInWithPopup(auth, provider);
};
