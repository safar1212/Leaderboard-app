import './style.css';
import getUserInput from './getUser';
import {submitButton, url} from './submit';

const refreshButton = document.getElementById('refresh-button');


getUserInput(url);

refreshButton.addEventListener('click', () => {
    getUserInput(url);
});
