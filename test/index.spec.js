// importamos la funcion que vamos a testear
import {
  query,
} from 'firebase/firestore';
import { signInWithPopup } from 'firebase/auth';
import { saveTextarea, ordenamiento } from '../src/lib/firebase';

jest.mock('@firebase/firestore');

describe('signInWithPopup', () => {
  it('debería ser una función', () => {
    expect(typeof signInWithPopup).toBe('function');
  });
});

describe('saveTextarea', () => {
  it('deberia ser una funcion', () => {
    expect(typeof saveTextarea).toBe('function');
  });

  test('deberia mostrar post', async () => {
    await saveTextarea();
    expect(query).toHaveBeenCalled();
  });
});

describe('posteos', () => {
  it('deberia ser un objeto', () => {
    expect(typeof posteos).toBe('object');
  });
});

describe('ordenamiento', () => {
  it('deberia ser un objeto', () => {
    expect(typeof ordenamiento).toBe('object');
  });
});
