/* eslint-disable import/no-unresolved */
/* eslint-disable no-new */
import setEventListener from './events.js';

export default class Calculator {
  constructor() {
    setEventListener();
  }
}

new Calculator();
