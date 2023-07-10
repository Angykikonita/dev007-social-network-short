import { addDoc, collection } from "firebase/firestore";
import { saveTextarea } from "../lib/firebase";
export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const HomeDiv1 = document.createElement('form');
  const caption = document.createElement('P')
  const buttonLogin = document.createElement('button');
  const textarea = document.createElement('textarea');
  const publish = document.createElement('button');

  HomeDiv1.addEventListener('submit',(e) => {
    e.preventDefault()
    // console.log (textarea.value)
  })
  


  buttonLogin.textContent = 'volver al login';
  buttonLogin.className= 'btnlogin';
  buttonLogin.addEventListener('click', () => onNavigate('/'));


  caption.className= 'caption';
  caption.textContent='Recomienda las canciones mas dedicables aqui...'

  HomeDiv1.className='homeDiv1'; 
  textarea.className= 'textarea';
  textarea.textContent = ' tu dedicatoria aqui';  


  publish.className='btnPublish';
  publish.textContent= 'publicar';
  //publish.addEventListener('click',() => 
  saveTextarea(textarea.value);

  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(caption);
  HomeDiv.appendChild(HomeDiv1);
  HomeDiv1.appendChild(textarea);
  HomeDiv1.appendChild(publish);

  return HomeDiv;
};
