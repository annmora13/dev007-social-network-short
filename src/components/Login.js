// import {
//   getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult,
// } from 'firebase/auth';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  HomeDiv.innerHTML += `
  <h1>Inicia Sesión</h1> 
  <div class="buttonLogin" id="buttonLogin"> <img src="../img/image3.png" alt="Google">
  </div>`;

  const buttonLogin = HomeDiv.querySelector('#buttonLogin');
  buttonLogin.addEventListener('click', () => onNavigate('/Muro'));
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/Muro');
  });

  // const provider = GoogleAuthProvider(token, user);
  // const auth = getAuth();
  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     // IdP data available using getAdditionalUserInfo(result)
  //     // ...
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });

  // getRedirectResult(auth)
  //   .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access Google APIs.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;

  //     // The signed-in user info.
  //     const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  //   }).catch((error) => {
  //   // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  //   });

  return HomeDiv;
};
