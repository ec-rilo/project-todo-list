import './styles/reset.css';
import './styles/main.css';
import {createLandingPage} from './modules/landing-pg.js';

init();

function init() {
    const content = document.querySelector('#content');

    content.appendChild(createLandingPage());
}