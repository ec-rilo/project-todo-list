import {inboxNotesArr} from '../index.js';
import {todayNotesArr} from '../index.js';

'use strict'

/* Note Classes */

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

/* DOM creation functions */

function createSimpleNote() {
    let noteContainer = document.createElement('div');
    noteContainer.classList.add('note-container');
    
    const checkBubble = document.createElement('div');
    checkBubble.classList.add('check-bubble');
    noteContainer.appendChild(checkBubble);
        
    let bodyText = document.createElement('p');
    bodyText.classList.add('note-text');
    bodyText.innerHTML = `${this._text}`;
    noteContainer.appendChild(bodyText);

    return noteContainer;
}

function createComplexNote() {
    let noteContainer = document.createElement('div');
    noteContainer.classList.add('note-container');
    
    const checkBubble = document.createElement('div');
    checkBubble.classList.add('check-bubble');
    noteContainer.appendChild(checkBubble);
    
    let noteTime = document.createElement('p');
    noteTime.classList.add('note-text', 'note-time');
    noteTime.innerHTML = `${this.time}`;
    noteContainer.appendChild(noteTime);

    let separator = document.createElement('p');
    separator.classList.add('separator')
    separator.innerHTML = ' - ';
    noteContainer.appendChild(separator);

    let noteTitle = document.createElement('p');
    noteTitle.classList.add('note-text');
    noteTitle.innerHTML = `${this.title}`;
    noteContainer.appendChild(noteTitle);

    return noteContainer;
}

function createNoteInput() {
    let noteContainer = document.createElement('div');
    noteContainer.classList.add('note-container');

    let bubble = document.createElement('div');
    bubble.classList.add('check-bubble');
    noteContainer.appendChild(bubble);

    let noteInputContainer = document.createElement('div');
    noteInputContainer.classList.add('note-input-container');
    noteContainer.appendChild(noteInputContainer);

    let noteInput = document.createElement('input');
    noteInput.classList.add('note-input');
    noteInput.setAttribute('type', 'text');
    noteInput.setAttribute('placeholder', 'Add a task');
    noteInputContainer.appendChild(noteInput);

    return noteContainer;
}

/* Note Logic */

function populateNotes(title) {
    const noContentText = document.querySelector('.no-content-text');
    const notesContainer = document.querySelector('.notes-container');
    
    if (title.innerHTML === 'Inbox') {
        noContentText.style.color = 'red';
    }
    else if (title.innerHTML === 'Today') {
        if (inboxNotesArr.length === 0) {
            if (window.getComputedStyle(noContentText).display === 'none') {
                noContentText.style.display = 'block';
                return;
            }
            else {
                let numOfNotes = inboxNotesArr.length;
                for (let i = 0; i < numOfNotes; ++i) {
                    
                }   
            }
        }
        
        noContentText.style.color = 'green';
        console.log('Today');
        console.log('green');
    }
    else if (title.innerHTML === 'This Week') {
        noContentText.style.color = 'blue';
        console.log('This Week');
        console.log('blue');
    }
}

let incrementNoteListener = ((title) => {
    let titleName = title.innerHTML;
    const notesContainer = document.querySelector('.notes-container');

    let incrementBtn = document.querySelector('.increment-note-btn');
    incrementBtn.addEventListener('click', () => {

        let noContentText = document.querySelector('.no-content-text');
        if (window.getComputedStyle(noContentText).display === 'block') {
            noContentText.style.display = 'none';
        }

        if (titleName === 'Inbox') {
            // Add a new note to the array that will create a input note.
            // The user will input the note
            // if the user's input had no value delete the created input element.
                // if the current tab storage has no notes set no content-text-display to block
            // else if the user input a value then add the note to the correct tab storages
        }
        else if (titleName === 'Today') {
            
        }
        else if (titleName === 'This Week') {

        }
        

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

export {
    switchTabs,
    incrementNoteListener,
    Note
}