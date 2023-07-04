import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { iniciarSesionConGoogle } from '../src/lib/index';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

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
