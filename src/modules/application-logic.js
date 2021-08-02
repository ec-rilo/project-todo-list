import { sub } from 'date-fns';
import { closeCard } from './dom-creation.js';
import { createCard } from './dom-creation.js';
import { createSimpleNote } from './dom-creation.js';
import { createComplexNote } from './dom-creation.js';
import { createNoteInput } from './dom-creation.js';
import { createBlackOverlay } from './dom-creation.js';
import { removeBlackOverlay } from './dom-creation.js';

'use strict'

/* Classes */

class Note {
    constructor(noteTitle, noteTime, noteText) {
        this.title = noteTitle;
        this.text = noteText;
        this.time = noteTime;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get text() {
        return this._text;
    }

    set text(newText) {
        this._text = newText;
    }

    get time() {
        return this._time;
    }

    set time(newTime) {
        this._time = newTime;
    }
}

class Tab {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    set name(newName) {
        this._name = newName;
    }
}

/* Logic */

function addNoContentText(noContentText) {    
    noContentText.style.display = 'block'; 
}

function removeNoContentText(noContentText) {
    noContentText.style.display = 'none';
}

function loadNotes(tabName, tabStorageArr) {
    const notesContainer = document.querySelector('.notes-container');

    let numOfNotes = inboxNotesArr.length;
    for (let i = 0; i < numOfNotes; ++i) {
        
    }   
}

function populateNotes(title) {
    const noContentText = document.querySelector('.no-content-text');
    
    if (title.innerHTML === 'Inbox') {
        // if (inboxNotesArr.length === 0) {
        //     if (window.getComputedStyle(noContentText).display === 'none') {
        //         addNoContentText(noContentText);
        //         return;
        //     }
        //     else {
        //         loadNotes(title, inboxNotesArr);
        //     }
        // }

        noContentText.style.color = 'red';
    }
    else if (title.innerHTML === 'Today') {
        // if (todayNotesArr.length === 0) {
        //     if (window.getComputedStyle(noContentText).display === 'none') {
        //         addNoContentText(noContentText);
        //         return;
        //     }
        //     else {
        //         loadNotes(title, todayNotesArr);
        //     }
        // }

        noContentText.style.color = 'green';
    }
    else if (title.innerHTML === 'This Week') {
        // if (thisWeekNotesArr.length === 0) {
        //     if (window.getComputedStyle(noContentText).display === 'none') {
        //         addNoContentText(noContentText);
        //         return;
        //     }
        //     else {
        //         loadNotes(title, thisWeekNotesArr);
        //     }
        // }

        noContentText.style.color = 'blue';
    }
}

function createNoteObject(titleValue, descriptionValue, dateValue, priorityValue, projectValue) {
    let note = {
        title: titleValue,
        description: descriptionValue,
        date: dateValue,
        priority: priorityValue,
        project: projectValue,
    }

    return note;
}

function createNote() {
    let titleValue = document.getElementById('title-input').value;
    let descripValue = document.getElementById('description-input').value;
    let dateValue = document.getElementById('date-input').value;
    let priorityValue = document.getElementById('priority-input').value;
    let projectValue = document.getElementById('project-input').value;

    let newNote = createNoteObject(titleValue, descripValue, dateValue, priorityValue, projectValue);

    return newNote;
}

function openCard() {
    let body = document.querySelector('body');

    let blackOverlay = createBlackOverlay();
    let card = createCard();
    blackOverlay.appendChild(card);

    body.appendChild(blackOverlay);
}

function handleForm(e) {e.preventDefault();}

function getInboxStorage() {
    let inboxNotesArr = JSON.parse(localStorage.getItem('inboxNotesArr'));
    return inboxNotesArr;
}

function storeNote(tabName, note) {
    if (tabName === 'inbox') {
        let inboxStorage = getInboxStorage();
        
        inboxStorage.push(note);
        localStorage.setItem('inboxNotesArr', JSON.stringify(inboxStorage));
    }
}

let incrementNoteListener = (() => {
    let body = document.querySelector('body');
    let title = document.querySelector('.title');
    let titleName = title.innerHTML;

    let incrementBtn = document.querySelector('.increment-note-btn');
    incrementBtn.addEventListener('click', () => {
        openCard();

        let card = document.querySelector('.card');
        card.addEventListener('submit', () => {
            handleForm;

            let note = createNote();

            let projectTab = note.project
            storeNote(projectTab, note);
            
            closeCard();
        });
    });
});

let switchTabs = (() => {
    const pageTitle = document.querySelector('.title');

    if (pageTitle.innerHTML === 'Inbox') {
        populateNotes(pageTitle);
    }
    else if (pageTitle.innerHTML === 'Today') {
        populateNotes(pageTitle);
    }
    else if (pageTitle.innerHTML === 'This Week') {
        populateNotes(pageTitle);
    }
});

const tabPagePopulation = (() => {
    const inboxTab = document.querySelector('.inbox-tab');
    const todayTab = document.querySelector('.today-tab');
    const thisWeekTab = document.querySelector('.this-week-tab');
    const projectsTab = document.querySelector('.projects-tab');
    const tabArr = [inboxTab, todayTab, thisWeekTab, projectsTab];
    let pgTitle = document.querySelector('.title');

    inboxTab.addEventListener('click', () => {
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});
        inboxTab.style.fontWeight = 'bold';
        pgTitle.innerHTML = 'Inbox';
        switchTabs();
    });

    todayTab.addEventListener('click', () => {
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});
        todayTab.style.fontWeight = 'bold';
        pgTitle.innerHTML = 'Today';
        switchTabs()
    });

    thisWeekTab.addEventListener('click', () => {
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});
        thisWeekTab.style.fontWeight = 'bold';
        pgTitle.innerHTML = 'This Week';
        switchTabs()
    });

});

function defaultTabLoad() {
    switchTabs();
}

export {
    incrementNoteListener,
    tabPagePopulation,
    defaultTabLoad,
}