import { iniciarSesionConGoogle } from '../lib';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  HomeDiv.innerHTML += `
  <h1>Inicia Sesión</h1> 
  <div class="buttonLogin" id="buttonLogin"> <img src="../img/image3.png" alt="Google">
  </div>`;

  // event = e
  const buttonLogin = HomeDiv.querySelector('#buttonLogin');
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    iniciarSesionConGoogle().then(() => {
      onNavigate('/Muro');
    });
  });

  return HomeDiv;
};
