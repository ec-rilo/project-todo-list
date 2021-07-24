'use strict'

class Note {
    constructor(noteTitle, noteBody) {
        this.noteTitle = noteTitle;
        this.noteBody = noteBody;
    }

    get noteTitle() {
        return this.noteTitle;
    }

    set noteTitle(newTitle) {
        if (newTitle.length < 0) {
            alert('Title is to short, please try again.');
            return;
        }
        this._noteTitle = newTitle;
    }
    
    get noteBody() {
        return this.noteBody;
    }

    set noteBody(newBody) {
        if (newBody.length < 0) {
            alert('Body is to short, please try again.');
        }
        this._noteBody = newBody;
    }

    createNote() {

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

    createNote() {
        console.log('PASS');
    }
}



let noteProgram = (() => {
    const incrementNoteBtn = document.querySelector('.increment-note-btn');
    const pageTitle = document.querySelector('.title');

    const inboxTab = new Tab('Inbox');
    const todayTab = new Tab('Today');
    const thisWeekTab = new Tab('This Week');

    incrementNoteBtn.addEventListener('click', () => {
        if (pageTitle.innerHTML === 'Inbox') {
            inboxTab.createNote();
        }
        else if (pageTitle.innerHTML === 'Today') {
            console.log('Today');
        }
        else if (pageTitle.innerHTML === 'This Week') {
            console.log('This Week');
        }
    });
    // When the user clicks on the add a note button
    // Check what storage to use
    // If the storage is Inbox
        // Add the note to the inbox storage
    // If the storage is Today use Today
    // If the storage is This Week use this week
    // If it's projects don't do anything yet because projects is fucking complex.
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