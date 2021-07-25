'use strict'

class Note {
    constructor(title, time, bodyText) {
        this.title = title;
        this.noteBody = bodyText;
        this.time = time;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        if (newTitle.length < 0) {
            alert('Title is to short, please try again.');
            return;
        }
        this._title = newTitle;
    }
    
    get bodyText() {
        return this.bodyText;
    }

    set bodyText(newBody) {
        if (newBody.length < 0) {
            alert('Body is to short, please try again.');
        }
        this.bodyText = newBody;
    }

    get time() {
        return this._time;
    }

    set time(newTime) {
        this._time = newTime;
    }

    createNote() {
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

    createNoteInput() {
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

function populateNotes() {
    const pageTitle = document.querySelector('.title');
    const noContentText = document.querySelector('.no-content-text');
    const notesContainer = document.querySelector('.notes-container');

    const inboxNote = new Note('Work', '6:00am', 'p');
    const todayNote = new Tab('Today');
    const thisWeekNote = new Tab('This Week');

    
    
    if (pageTitle.innerHTML === 'Inbox') {
        // If inbox notes has no notes display the no content text
        // else
        // Load the inbox notes
        noContentText.style.color = 'red';
    }
    else if (pageTitle.innerHTML === 'Today') {
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

function addNote() {
    
}

let incrementNoteListener = ((title) => {
    let titleName = title.innerHTML;

    let incrementBtn = document.querySelector('.increment-note-btn');
    incrementBtn.addEventListener('click', () => {

        let noContentText = document.querySelector('.no-content-text');
        if (window.getComputedStyle(noContentText).display === 'block') {
            noContentText.style.display = 'none';
        }

        if (titleName === 'Inbox') {
            // Get the inbox array of notes
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