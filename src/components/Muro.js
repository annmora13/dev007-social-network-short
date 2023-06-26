import { onSnapshot } from 'firebase/firestore';
import { async } from 'regenerator-runtime';
import {
  createPost, erasePosts, getPosts, getPost, editPost,
} from '../lib/index.js';

// Variables
export const Muro = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const principal = document.createElement('div');
  const buttonHome = document.createElement('button');
  const postList = document.createElement('div');

  // Asignación de clases
  HomeDiv.setAttribute('class', 'container1');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.className = 'new-post__container__button';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  postList.classList.add('x');

  // Muro
  HomeDiv.innerHTML += `
  <div id="principal"
    <div class="posts__post">
      <h1 class="neonText">¡Bienvenido, coder!</h1>
    </div>
    <div class="new-post__container">
      <textarea id="doitTask" class="new-post__container__textarea"></textarea>
      <span class= "neon-text2">
      <button class="new-post__container__button" >Publicar</button></span>
    </div>
    <section class="posts">
      <div class="posts__post">
      <h1 class="neonText">Comenta tu duda o sugerencia</h1>
    </div></section>
  </div>`;

  // Publicar post
  HomeDiv.querySelector('.new-post__container__button').addEventListener(
    'click',
    () => {
      const textAreaContent = HomeDiv.querySelector(
        '.new-post__container__textarea',
      );
      createPost(textAreaContent.value)
        .then((posts) => {
          getPosts(onSnapshot);
          console.log(posts);
        });

      postList.className = '';
    },
  );

  // Mostrar post
  getPosts((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const posts = doc.data();
      html += `
            <div class="list-group-item-list-group-item-action">
            <p>${posts.contenido}</p>
            <button class="btn-delete"> <svg data-id="${doc.id}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a905b6" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 7h16" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            <path d="M10 12l4 4m0 -4l-4 4" />
          </svg></button>
          <button class="btn-edit" id="${doc.id}"><svg data-id="${doc.id}" xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a905b6" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
          <path d="M16 5l3 3" />
        </svg></button>
            </div></div>
          `;

          
    });
    postList.innerHTML = html;

    console.log(postList)

    const btnsDelete = postList.querySelectorAll('.btn-delete');
    btnsDelete.forEach((button) => button.addEventListener('click', ({ target: { dataset } }) => {
      erasePosts(dataset.id);
    }));

    const btnsEdit = postList.querySelectorAll('.btn-edit');
    btnsEdit.forEach((button) => {
      button.addEventListener('click', async (e) => {
        console.log(e.target.getAttribute('data-id'))
        const doc = await getPost(e.target.getAttribute('data-id'));
        //const task = doc.data;
        //const updatePost = button.getAttribute('id');
        console.log(doc.data());
        document.getElementById('doitTask').value = doc.data(
          +
        ).contenido;
      });
    });
  });

  // Secciones
  HomeDiv.appendChild(principal);
  HomeDiv.appendChild(postList);
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
