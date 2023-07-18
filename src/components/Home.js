import { saveTextarea, ordenamiento, deletePost } from '../lib/firebase';

export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const HomeDiv1 = document.createElement('form');
  const HomeDiv2 = document.createElement('div');
  const caption = document.createElement('p');
  const buttonLogin = document.createElement('button');
  const textarea = document.createElement('textarea');
  const publish = document.createElement('button');

  ordenamiento((querySnapshot) => {
    const container = document.createElement('div');
    container.innerHTML = ' ';
    querySnapshot.forEach((doc) => {
      container.className = 'cont';
      const txtContainer = document.createElement('label');
      txtContainer.className = 'txtcont';
      txtContainer.textContent = doc.data().textarea;
      const btndelete = document.createElement('button');
      btndelete.className = 'btndelete';
      btndelete.textContent = 'borrar';
      btndelete.addEventListener('click', () => {
        deletePost(doc.id);
      });
      container.append(txtContainer, btndelete);
    });
    HomeDiv2.appendChild(container);
  });

  HomeDiv1.addEventListener('submit', (e) => {
    e.preventDefault();
    saveTextarea(textarea.value);
    HomeDiv1.reset();
  });

  buttonLogin.textContent = 'volver al login';
  buttonLogin.className = 'btnlogin';
  buttonLogin.addEventListener('click', () => onNavigate('/'));
  caption.className = 'caption';
  caption.textContent = 'Recomienda las canciones mas dedicables aqui...';
  HomeDiv1.className = 'homeDiv1';
  textarea.className = 'textarea';
  textarea.textContent = ' tu dedicatoria aqui';
  publish.className = 'btnPublish';
  publish.textContent = 'publicar';
  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(caption);
  HomeDiv.appendChild(HomeDiv1);
  HomeDiv1.appendChild(textarea);
  HomeDiv1.appendChild(publish);
  HomeDiv.appendChild(HomeDiv2);

  return HomeDiv;
};
