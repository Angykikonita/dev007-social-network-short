/**
 * @jest-environment jsdom
 */

import { Login } from '../src/components/Login';

describe('All test of component login', () => {
  test('Component have a button', () => {
    const DOM = document.createElement('div');
    DOM.append(Login());
    const isButton = DOM.querySelector('.googleButton');
    expect(isButton).not.toBe(null);
  });
  test('Click a button', () => {
    const DOM = document.createElement('div');
    DOM.append(Login());
    const isButton = DOM.querySelector('.googleButton');
    // dar click a isButtton
    // crear el mock de las importaciones de google
    expect(isButton).not.toBe(null); // matcher para saber si fue llamada la funcion de google
  });
});
