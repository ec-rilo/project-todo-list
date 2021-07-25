import './styles/reset.css';
import './styles/main.css';
import {tabPagePopulation} from './modules/tab-logic.js';
import {defaultTabLoad} from './modules/tab-logic.js';

init();

function init() {
    defaultTabLoad();
    tabPagePopulation();
}