import './styles/reset.css';
import './styles/main.css';
import {tabPagePopulation} from './modules/tab-logic.js';
import {defaultTabLoad} from './modules/tab-logic.js';
import {incrementNoteListener} from './modules/note-logic.js';

incrementNoteListener();

let inboxNotesArr = [];
localStorage.setItem('inboxNotesArr', JSON.stringify(inboxNotesArr));

let todayNotesArr = [];
localStorage.setItem('todayNotesArr', JSON.stringify(todayNotesArr));

let thisWeekNotesArr = [];
localStorage.setItem('thisWeekNotesArr', JSON.stringify(thisWeekNotesArr));

// let storedInboxNotes = JSON.parse(localStorage.getItem('inboxNotes'));
// The above is how to call the array set in local storage

init();

function init() {
    defaultTabLoad();
    tabPagePopulation();
}

export {
    inboxNotesArr,
    todayNotesArr,
    thisWeekNotesArr
}