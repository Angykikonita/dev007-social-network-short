import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase';


export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className= 'homeDiv'
  HomeDiv.textContent = 'Bienvenidx...';  
  const imagen1 = document.createElement('img');
  imagen1.src= '/components/imagenes/ddddd.PNG';
	imagen1.className= 'img1'

  const loader1 = document.createElement('span');
  loader1.className= 'loader1'

  const caption= document.createElement('p');
  caption.className= 'caption'
  caption.textContent = 'Si no encuentras palabras ... Dedica una cancion ...';

  const buttonHome = document.createElement('button');
  buttonHome.className='googleButton'
  buttonHome.textContent = 'Autenticación con Google';

  buttonHome.addEventListener('click', () => {  
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        onNavigate('/home')
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  } );

  HomeDiv.appendChild(imagen1);
  HomeDiv.appendChild(loader1);
  HomeDiv.appendChild(caption);
  HomeDiv.appendChild(buttonHome);

 

  return HomeDiv;
};