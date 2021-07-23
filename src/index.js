import './styles/reset.css';
import './styles/main.css';
import {createLandingPage} from './modules/landing-pg.js';

console.log(createLandingPage);

init();


function init() {
    const content = document.querySelector('#content');

    content.appendChild(createLandingPage);

}