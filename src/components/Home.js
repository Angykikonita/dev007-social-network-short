import { saveTextarea, ordenamiento, deletePost, auth } from '../lib/firebase';

//Estas variables crean todos los elementos de la interfaz//
export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div'); //div principal
  const volverLogin = document.createElement('button'); //boton de volver al login
  const caption = document.createElement('p');//frase de arriba
  const HomeDiv1 = document.createElement('form'); //div donde contiene el cuadro (textarea) para postear y el boton (publish) de publicar
  const textarea = document.createElement('textarea');
  const publish = document.createElement('button');
  const HomeDiv2 = document.createElement('div');//div en donde regresara el post desde la base de datos

  let snapshotListener = null; // Declare a variable to store the snapshot listener
 // const idUsuario = auth.currentUser.uid;
  //console.log(idUsuario);

  function handleSnapshot(querySnapshot) {
    HomeDiv2.innerHTML = ' ';
    querySnapshot.forEach((doc) => {
      const container = document.createElement('div');
      container.className = 'cont';
      //contenedor de texto 
      const txtContainer = document.createElement('label');
      txtContainer.className = 'txtcont';
      txtContainer.textContent = doc.data().textarea;
      //donde se debera mostrar el usuario que es autor del post, por lo tanto aqui
      const emailUsuario = document.createElement('label');
      emailUsuario.className = 'emailAutor';
      emailUsuario.textContent = "idUsuario";

      const btndelete = document.createElement('button');
      btndelete.value = doc.id;
      btndelete.id = doc.id;
      btndelete.className = 'btndelete';
      btndelete.textContent = 'borrar';
      //Abajo boton para borrar post, pasando el id del documento como argumento
      btndelete.addEventListener('click', () => {
        deletePost(doc.id);
      });
      
      container.append(txtContainer, idUsuario, btndelete);
      HomeDiv2.appendChild(container);

      const email = currentUserInfo().email;
      function handleSubmit(e) {
        console.log('HOlaaa')
        e.preventDefault();
        saveTextarea(textarea.value, idUsuario, email);
        HomeDiv1.reset();
      }
      if (snapshotListener) {
        snapshotListener();
      }
    });
  }

  snapshotListener = ordenamiento(handleSnapshot);

  volverLogin.textContent = 'volver al login';
  volverLogin.className = 'btnlogin';
  volverLogin.addEventListener('click', () => onNavigate('/'));
  caption.className = 'caption';
  caption.textContent = 'Recomienda las canciones mas dedicables aqui...';
  HomeDiv1.className = 'homeDiv1';
  textarea.className = 'textarea';
  textarea.placeholder = 'tu dedicatoria aquí';
  publish.className = 'btnPublish';
  publish.textContent = 'publicar';
  HomeDiv.appendChild(volverLogin);
  HomeDiv.appendChild(caption);
  HomeDiv.appendChild(HomeDiv1);
  HomeDiv1.appendChild(textarea);
  HomeDiv1.appendChild(publish);
  HomeDiv.appendChild(HomeDiv2);

  HomeDiv.children[2].lastElementChild.addEventListener('click', (e) => {
    e.preventDefault()
    saveTextarea(textarea.value, idUsuario, email);
        HomeDiv1.reset();
  })

  return HomeDiv;
};
