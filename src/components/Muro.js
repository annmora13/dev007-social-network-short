import { onSnapshot } from 'firebase/firestore';
// import { async } from 'regenerator-runtime';
import {
  createPost, erasePosts, getPosts, editPost, getPost,
} from '../lib/index.js';

// Variables
export const Muro = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const principal = document.createElement('div');
  const buttonHome = document.createElement('button');
  const postList = document.createElement('div');
  let editStatus = false;
  let id = '';

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
      <textArea id="doitTask" class="new-post__container__textarea"></textArea>
      <span class= "neon-text2">
      <button class="new-post__container__button" >Publicar</button>
      <button class="edit-post__container__button" >Editar</button></span>
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
      createPost(textAreaContent.value).then((posts) => {
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
          <p>${posts.contenido}
          <br>
            <button id="likeButton" >
              <svg xmlns="http://www.w3.org/2000/svg" class="like-button" width="30" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  <i id="heartIcon" class="far fa-heart"></i>
                  <span id="likeCount">0</span>
                </svg>
            </button>
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
              <path d="M16 5l3 3" /></p>
            </svg></button>
        </div></div>
          `;
    });

    postList.innerHTML = html;

    const btnsDelete = postList.querySelectorAll('.btn-delete');
    btnsDelete.forEach((button) => button.addEventListener('click', ({ target: { dataset } }) => {
      erasePosts(dataset.id);
    }));

    // Editar Post
    HomeDiv.querySelector('.edit-post__container__button').addEventListener(
      'click',
      async (e) => {
        const textAreaContent = HomeDiv.querySelector(
          '.new-post__container__textarea',
        );
        console.log(textAreaContent);
        id = e.target.getAttribute('data-id');
        try {
          const p = await editPost(id, {
            contenido: 'algo',
          });
          console.log(p);
        } catch (error) {
          console.log(error);
        }

        getPosts(onSnapshot);
        postList.className = '';
      },
    );

    const btnsEdit = postList.querySelectorAll('.btn-edit');
    btnsEdit.forEach((button) => {
      button.addEventListener('click', async (e) => {
        console.log(e.target.getAttribute('data-id'));
        const doc = await getPost(e.target.getAttribute('data-id'));
        editStatus = true;
        id = e.target.getAttribute('data-id');
        console.log(doc.data());
        document.getElementById('doitTask').value = doc.data().contenido;

        if (!editStatus) {
          saveTask(e.target.getAttribute('data-id'));
        } else {
          console.log(document.querySelector('#doitTask').value);
          editPost(id, document.querySelector('#doitTask').value);
          editStatus = false;
        }

        // editPost(e.target.getAttribute('data-id'));
      });
    });

    // Botón de like
    //   const heartIcon = document.getElementById('heartIcon');
    //   const likeCount = document.getElementById('likeCount');

    //   let isLiked = false;
    //   let count = 0;

    //   const likeButton = document.getElementById('likeButton');
    //   likeButton.objects.keys((button) => likeButton.addEventListener('click', () => {
    //     if (isLiked) {
    //       isLiked = false;
    //       count--;
    //     } else {
    //       isLiked = true;
    //       count++;
    //     }

    //     updateButtonState();
    //     updateLikeCount();
    //   }));

    //   function updateButtonState() {
    //     if (isLiked) {
    //       heartIcon.objects.keys((button).classList.add('active'));
    //     } else {
    //       heartIcon.objects.keys((button).classList.remove('active'));
    //     }
    //   }

    //   function updateLikeCount() {
    //     likeCount.textContent = count;
    // }
  });

  // Secciones
  HomeDiv.appendChild(principal);
  HomeDiv.appendChild(postList);
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
