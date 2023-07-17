// importamos la funcion que vamos a testear
import { signInWithPopup } from 'firebase/auth';
import { Login } from '../src/components/Login';
import { myFunction } from '../src/lib/index';

describe(Login, () => {
  it('debería ser una función', () => {
    expect(typeof Login).toBe('function');
  });
});


describe(signInWithPopup, () => {
  it('debería ser una función', () => {
    expect(typeof signInWithPopup).toBe('function');
  });
});