import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { addDoc } from 'firebase/firestore';
import { createPost, iniciarSesionConGoogle } from '../src/lib/index';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');
jest.mock('../src/lib/index');

describe('iniciarSesionConGoogle', () => {
  it('is a function', () => {
    expect(typeof iniciarSesionConGoogle).toBe('function');
  });
  it('return a popUp asking for email and password', async () => {
    signInWithPopup.mockReturnValueOnce({ user: 'userGoogle' });
    const provider = GoogleAuthProvider.mockReturnValueOnce({});
    console.log(provider);
    const response = await iniciarSesionConGoogle();
    expect(response.user).toBe('userGoogle');
  });
  it('should call the signInWithPopup function when it is executed', async () => {
    await iniciarSesionConGoogle();
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

describe('createPost', () => {
  it('is a function', () => {
    expect(typeof createPost).toBe('function');
  });
  it('returns the content and id of the saved comment', async () => {
    addDoc.mockReturnValueOnce({ contenido: 'postContent' });
    const response = await createPost();
    expect(response.user).toBe('postContent');
  });
  it('save the comment on firebase with an id', async () => {
    await createPost();
    expect(addDoc).toHaveBeenCalled();
  });
});
