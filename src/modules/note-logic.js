'use strict'

class Note {
    constructor(title, bodyText) {
        this.noteTitle = noteTitle;
        this.noteBody = noteBody;
    }

    get title() {
        return this.title;
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

    createNote(title, time) {

        const noteContainer = document.createElement('div');
        noteContainer.classList.add('note-container');
    
        const checkBubble = document.createElement('div');
        checkBubble.classList.add('check-bubble');
        noteContainer.appendChild(checkBubble);

        const noteTitle = document.createElement('p');
        noteTitle.classList.add('note-text', 'note-title')
        noteTitle = `${this.title}`;
        noteContainer.appendChild(noteTitle);
    
        const noteTime = document.createElement('p');
        noteTime.classList.add('note-text', 'note-time');
        noteTime = `${this.time}`;
        noteContainer.appendChild(noteTime);

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

let noteProgram = (() => {
    const incrementNoteBtn = document.querySelector('.increment-note-btn');
    const pageTitle = document.querySelector('.title');
    const noContentText = document.querySelector('.no-content-text');

    const inboxTab = new Tab('Inbox');
    const todayTab = new Tab('Today');
    const thisWeekTab = new Tab('This Week');

    incrementNoteBtn.addEventListener('click', () => {
        if (pageTitle.innerHTML === 'Inbox') {
            noContentText.style.display = 'none';
            inboxTab.createNote();
        }
        else if (pageTitle.innerHTML === 'Today') {
            noContentText.style.display = 'none';
            console.log('Today');
        }
        else if (pageTitle.innerHTML === 'This Week') {
            noContentText.style.display = 'none';
            console.log('This Week');
        }
    });
    // When the user clicks on the add a note button
    // Check what storage to use
    // If the storage is Inbox
        // populate page with a note creation and remove "There is nothing here..." text.
        // If user inputs nothing delete the note and if there are no notes currently then display "There is nothing here..."

});

let switchTabs = (() => {
    const pageTitle = document.querySelector('.title');

    if (pageTitle.innerHTML === 'Inbox') {
        console.log('Inbox');
    }
    else if (pageTitle.innerHTML === 'Today') {
        console.log('Today');
    }
    else if (pageTitle.innerHTML === 'This Week') {
        console.log('This Week');
    }
});

export {
    switchTabs,
    noteProgram
}