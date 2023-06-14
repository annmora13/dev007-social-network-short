import { Login } from './components/Login.js';
import { Muro } from './components/Muro.js';

const rootDiv = document.getElementById('root');
const routes = {
  '/': Login,
  '/Muro': Muro,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname](onNavigate));
};

rootDiv.appendChild(component(onNavigate));
