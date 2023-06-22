import { collection, onSnapshot } from 'firebase/firestore';
import { createPost, getPosts } from '../lib/index.js';

export const Muro = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');
  const postList = document.createElement('div');

  HomeDiv.setAttribute('class', 'container1');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.className = 'new-post__container__button';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.innerHTML += `
  <div class="posts__post">
    <h1 class="neonText">¡Bienvenido, coder!</h1>
  </div>
    <div class="new-post__container">
      <textarea class="new-post__container__textarea"></textarea>
      <span class= "neon-text2">
      <button class="new-post__container__button" >Publicar</button></span>
    </div>
    <section class="posts">
      <div class="posts__post">
        <h1 class="neonText">Comenta tu duda o sugerencia</h1>
      </div></section>`;

  HomeDiv.querySelector('.new-post__container__button').addEventListener(
    'click',
    () => {
      const textAreaContent = HomeDiv.querySelector(
        '.new-post__container__textarea',
      );
      createPost(textAreaContent.value)
        .then((posts) => {
          getPosts(onSnapshot);
          console.log(postList);
        });

      postList.className = '';
    },
  );
  getPosts((collection) => {
    let html = '';
    collection.forEach((doc) => {
      const posts = doc.data();
      console.log('posts');
      html += `
            <li class="list-group-item list-group-item-action">
            <p>${posts.contenido}</p>
            </li>
          `;
    });
    postList.innerHTML = html;
  });

  HomeDiv.appendChild(postList);
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
