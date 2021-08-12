import  trashCanIconSrc  from '../images/trash-can-icon.svg';
import  pencilIconSrc  from '../images/pencil-icon.svg';
import hamMenuImgSrc from '../images/menu-btn-icon-white.svg';
import arrowImgSrc from '../images/angle-down-thin.svg';
import { getInboxStorage } from './application-logic.js';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

'use strict';

function closeCard() {
    let blackOverlay = document.querySelector('.black-overlay');
    let body = document.querySelector('body');

    body.removeChild(blackOverlay);
}

function getCurrentDate() {
    let currDate = new Date();
    let dateFormatted = format(currDate, 'yyyy-MM-dd');

    return dateFormatted;
}

function createCard() {
    let card = document.createElement('form');
    card.classList.add('card');
    card.setAttribute('autocomplete', 'off');
    card.setAttribute('action', '#');
    card.setAttribute('method', 'GET');

    let cardContentContainer = document.createElement('div')
    cardContentContainer.classList.add('card-content-container');
    card.appendChild(cardContentContainer);

    let cardTitleContainer = document.createElement('div');
    cardTitleContainer.classList.add('card-title-container');
    cardContentContainer.appendChild(cardTitleContainer);

    let title = document.createElement('input');
    title.setAttribute('id', 'title-input');
    title.classList.add('card-title-input');
    title.setAttribute('type', 'text');
    title.setAttribute('maxLength', '20');
    title.setAttribute('placeholder', 'Enter Task Name');
    title.setAttribute('required', '');
    cardTitleContainer.appendChild(title);

    let closeBtn = document.createElement('a');
    closeBtn.setAttribute('href', '#');
    closeBtn.classList.add('close');
    closeBtn.setAttribute('tabindex', '0');
    closeBtn.setAttribute('role', 'button');
    closeBtn.innerHTML = 'close';
    closeBtn.addEventListener('click', () => {
        closeCard();
    });
    cardTitleContainer.appendChild(closeBtn);

    let horizontalLine = document.createElement('div');
    horizontalLine.classList.add('horizontal-line');
    cardContentContainer.appendChild(horizontalLine);

    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContentContainer.appendChild(cardContent);

    let descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('card-description-container');
    cardContent.appendChild(descriptionContainer);

    let descriptionLabel = document.createElement('label');
    descriptionLabel.classList.add('input-title');
    descriptionLabel.setAttribute('for', 'description-input');
    descriptionLabel.innerHTML = 'Description:';
    descriptionContainer.appendChild(descriptionLabel);

    let descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('input-styling');
    descriptionInput.setAttribute('id', 'description-input');
    descriptionInput.setAttribute('maxLength', '400');
    descriptionInput.setAttribute('required', '');
    descriptionContainer.appendChild(descriptionInput);

    let dateContainer = document.createElement('div');
    dateContainer.classList.add('card-date-container');
    cardContent.appendChild(dateContainer);

    let dateLabel = document.createElement('label');
    dateLabel.classList.add('input-title');
    dateLabel.setAttribute('for', 'date-input');
    dateLabel.innerHTML = 'Due Date:';
    dateContainer.appendChild(dateLabel);

    let dateInput = document.createElement('input');
    dateInput.classList.add('input-styling', 'card-input');
    dateInput.setAttribute('id', 'date-input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('required', '');
    let currDate = getCurrentDate();
    dateInput.setAttribute('min', `${currDate}`);
    dateContainer.appendChild(dateInput);

    let priorityContainer = document.createElement('div');
    priorityContainer.classList.add('card-priority-container');
    cardContent.appendChild(priorityContainer);

    let priorityLabel = document.createElement('label');
    priorityLabel.classList.add('input-title');
    priorityLabel.setAttribute('for', 'priority-input');
    priorityLabel.innerHTML = 'Priority:';
    priorityContainer.appendChild(priorityLabel);

    let priorityInputContainer = document.createElement('select');
    priorityInputContainer.classList.add('input-styling', 'card-input');
    priorityInputContainer.setAttribute('type', 'text');
    priorityInputContainer.setAttribute('id', 'priority-input');
    priorityInputContainer.setAttribute('required', '');
    priorityContainer.appendChild(priorityInputContainer);

    let priorityOption1 = document.createElement('option');
    priorityOption1.setAttribute('value', 'low');
    priorityOption1.innerHTML = 'Low';
    priorityInputContainer.appendChild(priorityOption1);

    let priorityOption2 = document.createElement('option');
    priorityOption2.setAttribute('value', 'medium');
    priorityOption2.innerHTML = 'Medium';
    priorityInputContainer.appendChild(priorityOption2);

    let priorityOption3 = document.createElement('option');
    priorityOption3.setAttribute('value', 'high');
    priorityOption3.innerHTML = 'High';
    priorityInputContainer.append(priorityOption3);

    let projectContainer = document.createElement('div');
    projectContainer.classList.add('card-project-container');
    cardContent.appendChild(projectContainer);

    let projectLabel = document.createElement('label');
    projectLabel.classList.add('input-title');
    projectLabel.setAttribute('for', 'project-input');
    projectLabel.innerHTML = 'Project:';
    projectContainer.appendChild(projectLabel);

    let projectInputContainer = document.createElement('select');
    projectInputContainer.classList.add('input-styling', 'card-input');
    projectInputContainer.setAttribute('type', 'text');
    projectInputContainer.setAttribute('id', 'project-input');
    projectInputContainer.setAttribute('required', '');
    projectContainer.appendChild(projectInputContainer);

    let projectOption1 = document.createElement('option');
    projectOption1.setAttribute('value', 'inbox');
    projectOption1.innerHTML = 'Inbox';
    projectInputContainer.appendChild(projectOption1);

    let submissionBtnsContainer = document.createElement('div');
    submissionBtnsContainer.classList.add('submission-btns-container');
    cardContentContainer.appendChild(submissionBtnsContainer);

    let resetBtn = document.createElement('button');
    resetBtn.classList.add('reset-btn');
    resetBtn.setAttribute('type', 'reset');
    resetBtn.innerHTML = 'Reset Task';
    submissionBtnsContainer.appendChild(resetBtn);

    let submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.innerHTML = 'Add Task';
    submissionBtnsContainer.appendChild(submitBtn);

    return card;
}

function createLandingPage() {
    let homePageDiv = document.querySelector('#home-page');

    // Navigation Bar Content
    let navBarContainer = document.createElement('div');
    navBarContainer.classList.add('nav-bar-container');
    homePageDiv.appendChild(navBarContainer);

    let hamMenuBtnContainer = document.createElement('div');
    hamMenuBtnContainer.classList.add('hamburger-btn-container');
    navBarContainer.appendChild(hamMenuBtnContainer);

    let hamMenuBtnImg = document.createElement('img');
    hamMenuBtnImg.classList.add('hamburger-btn');
    hamMenuBtnImg.setAttribute('src', hamMenuImgSrc);
    hamMenuBtnContainer.appendChild(hamMenuBtnImg);

    let incrementNoteBtn = document.createElement('div');
    incrementNoteBtn.classList.add('increment-note-btn');
    navBarContainer.appendChild(incrementNoteBtn);

    let incrementNoteText = document.createElement('p');
    incrementNoteText.classList.add('increment-note-text');
    incrementNoteText.innerHTML = '+';
    incrementNoteBtn.appendChild(incrementNoteText);
    
    let loginBtn = document.createElement('button');
    loginBtn.classList.add('login-btn');
    loginBtn.innerHTML = 'Sign In';
    navBarContainer.appendChild(loginBtn);

    // Left Content Container & Main Container

    let contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');
    homePageDiv.appendChild(contentContainer);

    let leftContentContainer = document.createElement('div');
    leftContentContainer.classList.add('left-content-container');
    contentContainer.appendChild(leftContentContainer);

    let tabsContainer = document.createElement('ul');
    tabsContainer.classList.add('tabs-container');
    leftContentContainer.appendChild(tabsContainer);


    let tabClassesArr = [
        'inbox-tab',
        'today-tab',
        'this-week-tab',
        'projects-tab',
    ];

    let tabTextArr = [
        'Inbox',
        'Today',
        'This Week',
        'Projects',
    ];

    let numOfTabs = 4;
    for (let i = 0; i < numOfTabs; ++i) {
        let tab = document.createElement('li');
        tab.classList.add('tab');

        if (i === 3) {
            tab.classList.add('projects-tab-container');
        }

        tabsContainer.append(tab);

        let tabText = document.createElement('p');
        tabText.classList.add(tabClassesArr[i]);
        tabText.classList.add('single-tab');
        tabText.innerHTML = tabTextArr[i];
        tab.appendChild(tabText);
    }

    let projTabContainer = document.querySelector('.projects-tab-container');

    let arrowImg = document.createElement('img');
    arrowImg.classList.add('arrow-img');
    arrowImg.setAttribute('src', `${arrowImgSrc}`);
    projTabContainer.appendChild(arrowImg);

    // Right Content Container

    let rightContentContainer = document.createElement('div');
    rightContentContainer.classList.add('right-content-container');
    contentContainer.append(rightContentContainer);

    let infoContainer = document.createElement('div');
    infoContainer.classList.add('right-content-info-container');
    rightContentContainer.append(infoContainer);

    let mainTitle = document.createElement('p');
    mainTitle.classList.add('title');
    mainTitle.innerHTML = 'Today';
    infoContainer.appendChild(mainTitle);

    let notesContainer = document.createElement('div');
    notesContainer.classList.add('notes-container');
    infoContainer.appendChild(notesContainer);

    // Potentially add code here for "No Content Text";
    // As a p element with a "no-content-text" class.
}

let noteFactory = (noteNum, notePriority, titleText, noteProj, noteObj) => {

    function deleteNote(currNote, notePro, noteObj) {
        currNote.remove();

         
        let inboxStorage = getInboxStorage();
        let noteObjIndex = inboxStorage.findIndex( (object) => {
            return object.title === noteObj.title;
        });
        inboxStorage.splice(noteObjIndex, 1);
        localStorage.setItem( "inboxNotesArr", JSON.stringify(inboxStorage) );
    }

    function editNote() {

    }

    function updateNoteCb(noteObj) {
        let inboxStorage = getInboxStorage();
        let noteObjIndex = inboxStorage.findIndex( (object) => {
            return object.title === noteObj.title;
        });
        inboxStorage.splice(noteObjIndex, 1);
        inboxStorage.splice(noteObjIndex, 0, noteObj);
        localStorage.setItem( "inboxNotesArr", JSON.stringify(inboxStorage) );
    }
    
    function createNoteElem() {
        let note = document.createElement('div');
        note.classList.add('note');
        note.setAttribute('id', `note-${noteNum}`);

        let checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkbox-container', `${notePriority}-pri-cb-container`);
        note.appendChild(checkboxContainer);

        let checkbox = document.createElement('input');
        checkbox.setAttribute('id', `cb${noteNum}`);
        checkbox.classList.add('checkbox');
        checkbox.setAttribute('type', 'checkbox');
        if (noteObj.checkMarked === true) {
            note.style.opacity = '0.3';
            checkbox.checked = true;
        }

        checkbox.addEventListener('click', () => {
            if (checkbox.checked === false) {
                note.style.opacity = '1';

                noteObj.checkMarked = false;
                updateNoteCb(noteObj);
            }
            else if (checkbox.checked || noteObj.checkMarked === true) {
                note.style.opacity = '0.3';

                noteObj.checkMarked = true;
                updateNoteCb(noteObj);
            }
        });

        checkboxContainer.appendChild(checkbox);

        let checkboxLabel = document.createElement('label');
        checkboxLabel.setAttribute('for', `cb${noteNum}`);
        checkboxContainer.appendChild(checkboxLabel);

        let noteTitle = document.createElement('p');
        noteTitle.innerHTML = titleText;
        note.appendChild(noteTitle);

        let editBtnContainer = document.createElement('div');
        editBtnContainer.classList.add('edit-btn-container');
        note.appendChild(editBtnContainer);

        editBtnContainer.addEventListener('click', () => {

        });

        let editBtnImg = document.createElement('img');
        editBtnImg.setAttribute('src', pencilIconSrc);
        editBtnImg.setAttribute('alt', 'Edit note Button');
        editBtnImg.classList.add('edit-btn-img');
        editBtnContainer.appendChild(editBtnImg);

        let deleteBtnContainer = document.createElement('div');
        deleteBtnContainer.classList.add('delete-btn-container');
        note.appendChild(deleteBtnContainer);

        deleteBtnContainer.addEventListener('click', () => deleteNote(note, noteProj, noteObj));

        let deleteBtnImg = document.createElement('img');
        deleteBtnImg.classList.add('delete-btn-img');
        deleteBtnImg.setAttribute('src', trashCanIconSrc);
        deleteBtnImg.setAttribute('alt', 'Trash note button.');
        deleteBtnContainer.appendChild(deleteBtnImg);

        return note;
    }
    
    let note = createNoteElem();
    return note;
};

function createBlackOverlay() {
    let blackOverlay = document.createElement('div');
    blackOverlay.classList.add('black-overlay');

    return blackOverlay;
}

function removeBlackOverlay() {
    let blackOverlay = document.createElement('.black-overlay');
    blackOverlay.remove();
}

export {
    closeCard,
    createCard,
    createBlackOverlay,
    removeBlackOverlay,
    noteFactory,
    createLandingPage,
}