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

function populateNotes() {
    const pageTitle = document.querySelector('.title');
    const noContentText = document.querySelector('.no-content-text');
    const notesContainer = document.querySelector('.notes-container');
    
    if (pageTitle.innerHTML === 'Inbox') {
        noContentText.style.color = 'red';
    }
    else if (pageTitle.innerHTML === 'Today') {
        if (inboxNotesArr.length === 0) {
            if (window.getComputedStyle(noContentText).display === 'none') {
                noContentText.style.display = 'block';
                return;
            }
            else {
                let numOfNotes = inboxNotesArr.length;
                for (let i = 0; i < numOfNotes; ++i) {
                    // Call each note from the array and load it onto the page.
                }   
            }
        }
        // If today notes has no notes display the no content text
        // else
        // load the  today notes
        noContentText.style.color = 'green';
        console.log('Today');
        console.log('green');
    }
    else if (pageTitle.innerHTML === 'This Week') {
        // If today notes has no notes display the no content text
        // else
        // load the this week notes
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
            let newNote = createNoteInput();
            inboxNotesArr.push(newNote);

            notesContainer.appendChild(newNote);
            let noteInput = document.querySelector('.note-input');
            noteInput.addEventListener('change', () => {
                let noteText = noteInput.value;
                let note = new Note('', '', noteText);
                inboxNotesArr.pop();
                notesContainer.removeChild(newNote);
                newNote = note.createSimpleNote();
                notesContainer.appendChild(newNote);
            });



            // Add a new note to the array that will create a input note.
            // The user will input the note
            // if the user's input had no value delete the created input element.
                // if the current tab storage has no notes set no content-text-display to block
            // else if the user input a value then add the note to the correct tab storages
        }
        else if (titleName === 'Today') {
            // Add a new note to the array that will create a input note.
            // The user will input the note
            // if the user's input had no value delete the created input element.
                // if the current tab storage has no notes set no content-text-display to block
            // else if the user input a value then add the note to the correct tab storages
        }
        else if (titleName === 'This Week') {

        }
        

    });
});

// When the user clicks on the increment button - DONE
// if the no content text display is block set to hidden - DONE
// The current tabs page will populate with a input asking for the users note
// The user will input the note
// if the user's input had no value delete the created input element.
    // if the current tab storage has no notes set no content-text-display to block
// else if the user input a value then add the note to the correct tab storage

let switchTabs = (() => {
    const pageTitle = document.querySelector('.title');

    if (pageTitle.innerHTML === 'Inbox') {
        populateNotes();
    }
    else if (pageTitle.innerHTML === 'Today') {
        populateNotes();
    }
    else if (pageTitle.innerHTML === 'This Week') {
        populateNotes();
    }
});

export {
    switchTabs,
    incrementNoteListener,
    Note
}