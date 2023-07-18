import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'homeDiv';
  HomeDiv.textContent = 'Bienvenidx...';

  const imagen1 = document.createElement('img');
  imagen1.src = '/components/imagenes/ddddd.PNG';
  imagen1.className = 'img1';

  const loader1 = document.createElement('span');
  loader1.className = 'loader1';

  const caption = document.createElement('p');
  caption.className = 'caption';
  caption.textContent = 'Si no encuentras palabras ... Dedica una cancion ...';

  const buttonHome = document.createElement('button');
  buttonHome.className = 'googleButton';
  buttonHome.textContent = 'Autenticación con Google';

  buttonHome.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        onNavigate('/home');
      });
  });

  HomeDiv.appendChild(imagen1);
  HomeDiv.appendChild(loader1);
  HomeDiv.appendChild(caption);
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
