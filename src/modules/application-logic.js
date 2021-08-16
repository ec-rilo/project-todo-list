import { sub } from 'date-fns';
import { closeCard } from './dom-creation.js';
import { createCard } from './dom-creation.js';
import { createBlackOverlay } from './dom-creation.js';
import { removeBlackOverlay } from './dom-creation.js';
import { noteFactory } from './dom-creation.js';

'use strict'

function handleForm(e) {e.preventDefault();} // prevents form from reloading page.

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

let compStorage = (() => {

    function getInboxStorage() {
        let inboxNotesArr = JSON.parse(localStorage.getItem('inboxNotesArr'));
        return inboxNotesArr;
    }

    function getProjStorage(name) {
        let projStorage = JSON.parse(localStorage.getItem(`${name}NotesArr`));
        return projStorage;
    }

    function deleteUserArr(arrName) {
        localStorage.removeItem(`${arrName}NotesArr`);
    }

    function createNewArr(arrName) {
        localStorage.setItem(`${arrName}NotesArr`, JSON.stringify([]) );
    }

    function storeArrName(arrName) {
        let projectNamesArr = JSON.parse(localStorage.getItem("projectNamesArr"));

        projectNamesArr.push(arrName);
        localStorage.setItem('projectNamesArr', JSON.stringify(projectNamesArr) );
    }

    function deleteArrName(arrName) {
        let projectNamesArr = JSON.parse(localStorage.getItem("projectNamesArr"));

        let index = projectNamesArr.indexOf(arrName);
        projectNamesArr.splice(index, 1);
        localStorage.setItem('projectNamesArr', JSON.stringify(projectNamesArr) );
    }

    function getNamesArr() {
        let namesArr = JSON.parse(localStorage.getItem('projectNamesArr') );

        return namesArr;
    }

    function storeProjInput(inputName) {
        let storage = JSON.parse(localStorage.getItem('projInputNames'));
        storage.push(inputName);
    }

    return {
        getInboxStorage,
        createNewArr,
        storeArrName,
        getNamesArr,
        getProjStorage,
        storeProjInput,
        deleteUserArr,
        deleteArrName,
    }
})();

let noteLogic = (() => {

    function createNoteObject(titleValue, descriptionValue, dateValue, priorityValue, projectValue) {
        let note = {
            title: titleValue,
            description: descriptionValue,
            date: dateValue,
            priority: priorityValue,
            project: projectValue,
            checkMarked: false,
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

    function storeNote(tabName, note) {
        if (tabName === 'inbox') {
            let inboxStorage = compStorage.getInboxStorage();
            
            inboxStorage.push(note);
            localStorage.setItem('inboxNotesArr', JSON.stringify(inboxStorage));
        }
        else if (tabName === 'Today') {
            console.log('Yea, the notes not storying. It\'s TODAY');
        }
        else if (tabName === 'This Week'){
            console.log('Yea, the notes not storying. It\'s TODAY');
        }
        else {
            let storage = compStorage.getProjStorage(tabName);

            storage.push(note);
            localStorage.setItem(`${tabName}NotesArr`, JSON.stringify(storage));
        }
    }

    function updateNote(tabName, note, prevNote) {
        if (tabName === 'inbox') {
            let inboxStorage = compStorage.getInboxStorage();

            let prevNoteIndex = inboxStorage.findIndex(x => x.title === prevNote.title);

            inboxStorage.splice(prevNoteIndex, 1);
            inboxStorage.splice(prevNoteIndex, 0, note);

            localStorage.setItem('inboxNotesArr', JSON.stringify(inboxStorage));
        }
        else if (tabName === 'Today') {
            console.log('Yea, the notes not storying. It\'s TODAY');
        }
        else if (tabName === 'This Week'){
            console.log('Yea, the notes not storying. It\'s TODAY');
        }
        else {
            let storage = compStorage.getProjStorage(tabName);

            let prevNoteIndex = storage.findIndex(x => x.title === prevNote.title);

            storage.splice(prevNoteIndex, 1);
            storage.splice(prevNoteIndex, 0, note);

            localStorage.setItem(`${tabName}NotesArr`, JSON.stringify(storage));
        }
    }

    function removeCurrNotes() {
        let notesContainer = document.querySelector('.notes-container');
    
        while (notesContainer.firstChild) {
            notesContainer.removeChild(notesContainer.lastChild);
          }
        // Select the notes container
        // remove each item within the notes container.
    }

    return {
        createNote,
        storeNote,
        removeCurrNotes,
        updateNote,
    }
})();

let pageLogic = (() => {
    
    function populateProjectTabs() {
        let namesArr = compStorage.getNamesArr();

        let projItemsContainer = document.querySelector('.proj-items-container');
        projItemsContainer.innerHTML = '';


        namesArr.forEach((projName) => {
            let projContainer = document.createElement('div');
            projContainer.classList.add('proj-tab', 'proj-align');

            let closeBtn = document.createElement('a');
            closeBtn.classList.add('proj-item-close');
            
            closeBtn.setAttribute('href', '#');
            closeBtn.setAttribute('tabindex', '0');
            closeBtn.setAttribute('role', 'button');
            closeBtn.innerHTML = 'close';
            projContainer.appendChild(closeBtn);

            closeBtn.addEventListener('click', () => {
                projContainer.remove();

                compStorage.deleteArrName(projName);
                compStorage.deleteUserArr(projName);
            });
            
            let name = document.createElement('a');
            name.classList.add('proj-tab-deco')
            name.setAttribute('href', '#');
            name.innerHTML = `• ${projName}`;

            name.addEventListener('click', () => {
                projTabPagePopulation(name, projName);
            })

            projContainer.appendChild(name);

            projItemsContainer.appendChild(projContainer);
        });
    }

    function projTabPagePopulation(projNameTab, projName) {
        const inboxTab = document.querySelector('.inbox-tab');
        const todayTab = document.querySelector('.today-tab');
        const thisWeekTab = document.querySelector('.this-week-tab');
        const projectsTab = document.querySelector('.projects-tab');
        let pgTitle = document.querySelector('.title');

        const tabArr = [inboxTab, todayTab, thisWeekTab, projectsTab];
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});

        let projItemsArr = document.querySelectorAll('.proj-tab-deco');
        projItemsArr.forEach(item => {item.style.fontWeight = 'normal'});

        projNameTab.style.fontWeight = 'bold';
        pgTitle.innerHTML = `${projName}`;
        switchTabs();
    }

    return {
        populateProjectTabs,
        projTabPagePopulation,
    }
})();

let cardLogic = (() => {

    function openCard() {
        let body = document.querySelector('body');
    
        let blackOverlay = createBlackOverlay();
        let card = createCard();
        blackOverlay.appendChild(card);
    
        body.appendChild(blackOverlay);
    }

    return {
        openCard
    }
})();

function populateNotes(title) {
    noteLogic.removeCurrNotes();
    
    if (title.innerHTML === 'Inbox') {
        let inboxStorage = compStorage.getInboxStorage();

        if (inboxStorage.length === 0) {
            let notesContainer = document.querySelector('.notes-container');
            notesContainer.style.display = 'none';

            let noContentText = document.querySelector('.no-content-text');
            noContentText.style.display = 'block';
        }
        else {
            let notesContainer = document.querySelector('.notes-container');
            notesContainer.style.display = 'block';

            let noContentText = document.querySelector('.no-content-text');
            noContentText.style.display = 'none';
        }

        inboxStorage.forEach(note => {
            let noteIndexFromArr = inboxStorage.indexOf(note);
            let notePri = note.priority;
            let noteTitle = note.title;
            let noteProj = note.project;

            let currNote = noteFactory(noteIndexFromArr, notePri, noteTitle, noteProj, note, inboxStorage , title.innerHTML);

            let notesContainer = document.querySelector('.notes-container');
            notesContainer.appendChild(currNote);
        });
    }
    else if (title.innerHTML === 'Today') {
        // Get all notes that are due at the current date
    }
    else if (title.innerHTML === 'This Week') {
        // Get all notes that are due between today and the end of the week. 
    }
    else {
        let titleName = title.innerHTML;

        let projStorage = compStorage.getProjStorage(titleName);
        

        if (projStorage.length === 0) {
            let notesContainer = document.querySelector('.notes-container');
            notesContainer.style.display = 'none';

            let noContentText = document.querySelector('.no-content-text');
            noContentText.style.display = 'block';
        }
        else {
            let notesContainer = document.querySelector('.notes-container');
            notesContainer.style.display = 'block';

            let noContentText = document.querySelector('.no-content-text');
            noContentText.style.display = 'none';
        }

        projStorage.forEach(note => {
            let noteIndexFromArr = projStorage.indexOf(note);
            let notePri = note.priority;
            let noteTitle = note.title;
            let noteProj = note.project;

            let currNote = noteFactory(noteIndexFromArr, notePri, noteTitle, noteProj, note, projStorage, title.innerHTML);

            let notesContainer = document.querySelector('.notes-container');
            notesContainer.appendChild(currNote);
        });
    }
}

let incrementNoteListener = (() => {
    let body = document.querySelector('body');
    let title = document.querySelector('.title');
    let titleName = title.innerHTML;

    let incrementBtn = document.querySelector('.increment-note-btn');
    incrementBtn.addEventListener('click', () => {
        cardLogic.openCard();

        let card = document.querySelector('.card');
        card.addEventListener('submit', () => {
            handleForm;

            let note = noteLogic.createNote();

            let projectTab = note.project
            noteLogic.storeNote(projectTab, note);

            closeCard(note);
            populateNotes(title);
        });
    });
});

let switchTabs = (() => {
    const pageTitle = document.querySelector('.title');

    populateNotes(pageTitle);
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
        let projItemsArr = document.querySelectorAll('.proj-tab-deco');
        projItemsArr.forEach(item => {item.style.fontWeight = 'normal'});

        inboxTab.style.fontWeight = 'bold';
        pgTitle.innerHTML = 'Inbox';
        switchTabs();
    });

    todayTab.addEventListener('click', () => {
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});
        let projItemsArr = document.querySelectorAll('.proj-tab-deco');
        projItemsArr.forEach(item => {item.style.fontWeight = 'normal'});

        todayTab.style.fontWeight = 'bold';
        pgTitle.innerHTML = 'Today';
        switchTabs()
    });

    thisWeekTab.addEventListener('click', () => {
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});
        let projItemsArr = document.querySelectorAll('.proj-tab-deco');
        projItemsArr.forEach(item => {item.style.fontWeight = 'normal'});

        thisWeekTab.style.fontWeight = 'bold';
        pgTitle.innerHTML = 'This Week';
        switchTabs()
    });

});

export {
    incrementNoteListener,
    tabPagePopulation,
    compStorage,
    populateNotes,
    pageLogic,
    handleForm,
    noteLogic,
}