// importamos la funcion que vamos a testear
import { getFirestore, collection, addDoc, onSnapshot, orderBy, query, deleteDoc, doc} from "firebase/firestore";
import { signInWithPopup, } from 'firebase/auth';
import { saveTextarea, onSnapshot, ordenamiento,deletePost } from "../lib/firebase";
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