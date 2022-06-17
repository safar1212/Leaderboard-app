/* eslint-disable no-unused-vars */

import './style.css';
import getUserInput from './getUser.js';
import { submitButton, url } from './submit.js';

const refreshButton = document.getElementById('refresh-button');

refreshButton.addEventListener('click', () => {
  getUserInput(url);
});

getUserInput(url);
