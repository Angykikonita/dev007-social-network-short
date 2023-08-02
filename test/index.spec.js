// importamos la funcion que vamos a testear
/* import {
  query,
} from 'firebase/firestore'; */
import { signInWithPopup } from 'firebase/auth';
import { saveTextarea, ordenamiento, deletePost } from '../src/lib/firebase';

jest.mock('firebase/auth');
jest.mock('@firebase/firestore');

describe('signInWithPopup', () => {
  it('debería ser una función', () => {
    expect(typeof signInWithPopup).toBe('function');
  });

  it('llamar a la funcion', async () => {
    await signInWithPopup();
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

describe('saveTextarea', () => {
  it('deberia ser una funcion', () => {
    expect(typeof saveTextarea).toBe('function');
  });

  /* test('deberia mostrar post', async () => {
    await saveTextarea();
    expect(query).toHaveBeenCalled();
  });
  */
});

describe('ordenamiento', () => {
  it('deberia ser una funcion', () => {
    expect(typeof ordenamiento).toBe('function');
  });
});

describe('deletePost', () => {
  test('deberia ser una funcion', () => {
    expect(typeof deletePost).toBe('function');
  });
});
