import { saveTextarea, ordenamiento, deletePost } from '../lib/firebase';

export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const HomeDiv1 = document.createElement('form');
  const HomeDiv2 = document.createElement('div');
  const caption = document.createElement('p');
  const buttonLogin = document.createElement('button');
  const textarea = document.createElement('textarea');
  const publish = document.createElement('button');

  let snapshotListener = null; // Declare a variable to store the snapshot listener

  function handleSnapshot(querySnapshot) {
    HomeDiv2.innerHTML = ''; // Clear the container before rendering posts

    querySnapshot.forEach((doc) => {
      const container = document.createElement('div');
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
      HomeDiv2.appendChild(container);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveTextarea(textarea.value);
    HomeDiv1.reset();
  }

  if (snapshotListener) {
    snapshotListener();
  }

  snapshotListener = ordenamiento(handleSnapshot);

  buttonLogin.textContent = 'volver al login';
  buttonLogin.className = 'btnlogin';
  buttonLogin.addEventListener('click', () => onNavigate('/'));
  caption.className = 'caption';
  caption.textContent = 'Recomienda las canciones mas dedicables aqui...';
  HomeDiv1.className = 'homeDiv1';
  textarea.className = 'textarea';
  textarea.placeholder = 'tu dedicatoria aquí';
  publish.className = 'btnPublish';
  publish.textContent = 'publicar';
  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(caption);
  HomeDiv.appendChild(HomeDiv1);
  HomeDiv1.appendChild(textarea);
  HomeDiv1.appendChild(publish);
  HomeDiv.appendChild(HomeDiv2);

  HomeDiv1.addEventListener('submit', handleSubmit);

  return HomeDiv;
};
