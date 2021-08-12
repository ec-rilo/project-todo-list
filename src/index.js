import './styles/reset.css';
import './styles/main.css';
import { tabPagePopulation } from './modules/application-logic.js';
import { incrementNoteListener } from './modules/application-logic.js';
import { createLandingPage } from './modules/dom-creation.js';

if(!localStorage.getItem("inboxNotesArr")) {
    localStorage.setItem( "inboxNotesArr", JSON.stringify([]) );
}

if(!localStorage.getItem("todayNotesArr")) {
    localStorage.setItem( "todayNotesArr", JSON.stringify([]) );
}

if(!localStorage.getItem("thisWeekNotesArr")) {
    localStorage.setItem( "thisWeekNotesArr", JSON.stringify([]) );
}

// let storedInboxNotes = JSON.parse(localStorage.getItem('inboxNotes'));
// The above is how to call the array set in local storage

init();

function init() {
    createLandingPage();
    tabPagePopulation();
    incrementNoteListener();
}