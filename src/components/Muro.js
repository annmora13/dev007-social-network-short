export const Muro = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenida al Muro';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  // HomeDiv.appendChild(buttonLogin);
  // HomeDiv.appendChild(buttonRegister);

  HomeDiv.innerHTML += `
    <div class="new-post__container">
      <textarea class="new-post__container__textarea"></textarea>
      <button class="new-post__container__button">Publicar</button>
    </div>
    <section class="posts">
      <div class="posts__post">
        <p>Comenta tu duda o sugerencia</p>
      </div></section>`;

  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
