import  trashCanIconSrc  from '../images/trash-can-icon.svg';
import  pencilIconSrc  from '../images/pencil-icon.svg';
import hamMenuImgSrc from '../images/menu-btn-icon-white.svg';
import arrowImgSrc from '../images/angle-down-thin.svg';
import arrowUpImgSrc from '../images/angle-up-arrow.svg';
import { compStorage } from './application-logic.js';
import { populateNotes } from './application-logic.js';
import { pageLogic } from './application-logic.js';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

'use strict';

let cards = (() => {
    function handleForm(e) {e.preventDefault();} // prevents form from reloading page.

    function deleteProjCard() {
        let card = document.querySelector('.new-proj-card');
        card.remove();
    }

    function createProjCard() {
        let card = document.createElement('div');
        card.classList.add('new-proj-card', 'align-proj-card');

        let contentContainer = document.createElement('div');
        contentContainer.classList.add('new-proj-card-content-container');
        card.appendChild(contentContainer);

        let titleContainer = document.createElement('div');
        titleContainer.classList.add('new-proj-card-title-container', 'proj-input-text');
        titleContainer.innerHTML = 'New Project';
        contentContainer.appendChild(titleContainer);

        let closeBtn = document.createElement('a');
        closeBtn.classList.add('proj-close');
        closeBtn.classList.add('align-close-btn');
        closeBtn.setAttribute('href', '#');
        closeBtn.setAttribute('tabindex', '0');
        closeBtn.setAttribute('role', 'button');
        closeBtn.innerHTML = 'close';
        titleContainer.appendChild(closeBtn);

        closeBtn.addEventListener('click', () => {
            removeBlackOverlay();
        });

        let form = document.createElement('form');
        form.setAttribute('autocomplete', 'off');
        form.setAttribute('action', '#');
        form.setAttribute('method', 'GET');

        form.addEventListener('submit', () => {
            let newProjName = nameInput.value;

            compStorage.createNewArr(newProjName);
            compStorage.storeArrName(newProjName);
            pageLogic.populateProjectTabs();

            compStorage.storeProjInput(newProjName);
            
            removeBlackOverlay();
        });
        contentContainer.appendChild(form);

        let nameContainer = document.createElement('div');
        nameContainer.classList.add('card-proj-name-container');
        form.appendChild(nameContainer);

        let nameLabel = document.createElement('label');
        nameLabel.classList.add('input-title');
        nameLabel.setAttribute('for', 'new-proj-input');
        nameLabel.innerHTML = 'Name: ';
        nameContainer.appendChild(nameLabel);

        let nameInput = document.createElement('input');
        nameInput.classList.add('new-proj-card-title-input');
        nameInput.setAttribute('id', 'new-proj-input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('maxLength', '30');
        nameInput.setAttribute('placeholder', 'Enter Project Name');
        nameInput.setAttribute('required', '');
        nameContainer.appendChild(nameInput);

        let submissionBtnsContainer = document.createElement('div');
        submissionBtnsContainer.classList.add('new-proj-submission-btns-container');
        form.appendChild(submissionBtnsContainer);

        let resetBtn = document.createElement('button');
        resetBtn.innerHTML = 'Reset';
        resetBtn.classList.add('reset-btn');
        resetBtn.setAttribute('type', 'reset');
        submissionBtnsContainer.appendChild(resetBtn);
        
        let submitBtn = document.createElement('button');
        submitBtn.innerHTML = 'Add Project';
        submitBtn.classList.add('submit-btn');
        submitBtn.setAttribute('type', 'submit');
        submissionBtnsContainer.appendChild(submitBtn);

        return card;
    }

    function createEditCard(currNote, noteObj) {
        let noteTitle = noteObj.title
        let noteProj = noteObj.project;
        let notePri = noteObj.priority;
        let noteDesc = noteObj.description;
        let noteDate = noteObj.date;

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
        title.innerHTML = noteTitle;
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
    
        let projNameArr = JSON.parse(localStorage.getItem("projectNamesArr"));
        let projNameArrLength = projNameArr.length;
        if (projNameArrLength > 0) {
    
            let numOfProjOptions = projNameArrLength;
            for (let i = 0; i < numOfProjOptions; ++i) {
                let projectOption = document.createElement('option');
                projectOption.setAttribute('value', `${projNameArr[i]}`);
                projectOption.innerHTML = `${projNameArr[i]}`;
                projectInputContainer.appendChild(projectOption);
            }
        }
    
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

    return {
        createProjCard,
        createEditCard,
    }
})();

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

    let projNameArr = JSON.parse(localStorage.getItem("projectNamesArr"));
    let projNameArrLength = projNameArr.length;
    if (projNameArrLength > 0) {

        let numOfProjOptions = projNameArrLength;
        for (let i = 0; i < numOfProjOptions; ++i) {
            let projectOption = document.createElement('option');
            projectOption.setAttribute('value', `${projNameArr[i]}`);
            projectOption.innerHTML = `${projNameArr[i]}`;
            projectInputContainer.appendChild(projectOption);
        }
    }

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

function createDropDown() {
    let dropDownLi = document.createElement('li');
    dropDownLi.classList.add('drop-down-li');

    let projItemsContainer = document.createElement('div');
    projItemsContainer.classList.add('proj-items-container');
    dropDownLi.appendChild(projItemsContainer);

    let addProjMasterContainer = document.createElement('div');
    addProjMasterContainer.classList.add('add-proj-master-container');
    dropDownLi.appendChild(addProjMasterContainer);

    let addProjBtnContainer = document.createElement('a');
    addProjBtnContainer.setAttribute('href', '#');
    addProjBtnContainer.classList.add('add-proj-btn-container');
    addProjMasterContainer.appendChild(addProjBtnContainer);

    addProjBtnContainer.addEventListener('click', () => {
        let body = document.querySelector('body');
        
        let blackOverlay = createBlackOverlay();
        body.appendChild(blackOverlay);

        let projCard = cards.createProjCard();
        blackOverlay.appendChild(projCard);
        
    });

    let addProjIcon = document.createElement('div');
    addProjIcon.innerHTML = '+'
    addProjIcon.classList.add('add-proj-icon');
    addProjBtnContainer.appendChild(addProjIcon);

    let addProjText = document.createElement('p');
    addProjText.classList.add('add-proj-btn');
    addProjText.innerHTML = ' Add Project';
    addProjBtnContainer.appendChild(addProjText);
    return dropDownLi;
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

        let tabText = document.createElement('a');
        tabText.setAttribute('href', '#');
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
    projTabContainer.classList.add('inactive');

    
    projTabContainer.addEventListener('click', () => {
        if (projTabContainer.classList.contains('inactive')) {
            projTabContainer.classList.add('projects-tab-container-deco');
            arrowImg.setAttribute('src', `${arrowUpImgSrc}`);
            
            let dropDownLi = createDropDown();
            tabsContainer.appendChild(dropDownLi);
            pageLogic.populateProjectTabs();

            projTabContainer.classList.toggle('inactive');
            projTabContainer.classList.toggle('active');
        }
        else if (projTabContainer.classList.contains('active')) {
            projTabContainer.classList.remove('projects-tab-container-deco');
            arrowImg.setAttribute('src', `${arrowImgSrc}`);
            
            let dropDownLi = document.querySelector('.drop-down-li');
            dropDownLi.remove();

            projTabContainer.classList.toggle('active');
            projTabContainer.classList.toggle('inactive');
        }
    });

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

    let noContentText = document.createElement('p');
    noContentText.classList.add('no-content-text');
    noContentText.innerHTML = 'Got Notes?';
    infoContainer.appendChild(noContentText);
}

let noteFactory = (noteNum, notePriority, titleText, noteProj, noteObj, noteStorage, storageName) => {

    function deleteNote(currNote, noteObj) {
        
        if (storageName === 'Inbox') {
            currNote.remove();
        
            let inboxStorage = compStorage.getInboxStorage();
            let noteObjIndex = inboxStorage.findIndex( (object) => {
                return object.title === noteObj.title;
            });
            inboxStorage.splice(noteObjIndex, 1);
            localStorage.setItem( "inboxNotesArr", JSON.stringify(inboxStorage) );

            let pageTitle = document.querySelector('.title');
            populateNotes(pageTitle);
        }
        else {
            currNote.remove();

            let noteObjIndex = noteStorage.findIndex( (object) => {
                return object.title === noteObj.title;
            });
            noteStorage.splice(noteObjIndex, 1);
            localStorage.setItem( `${storageName}NotesArr`, JSON.stringify(noteStorage) );

            let pageTitle = document.querySelector('.title');
            populateNotes(pageTitle);
        }
    }

    function editNote(currNote, noteObj) {
        // createBlackOverlay();
        cards.createEditCard(currNote, noteObj);

        // Open the black overlay
        // Open a card that is populated with note information.
        // If user clicks the close button. The card closes.
        // Else if user submits.

        // update the current note with the new details.
        // remove the current note on the page.
        // Remove the note from the array
        // Insert the revised note into the page
        // insert the revised note into the array.


        /*

        if (storageName === 'Inbox') {
            currNote.remove();
        
            let inboxStorage = compStorage.getInboxStorage();
            let noteObjIndex = inboxStorage.findIndex( (object) => {
                return object.title === noteObj.title;
            });
            inboxStorage.splice(noteObjIndex, 1);



            localStorage.setItem( "inboxNotesArr", JSON.stringify(inboxStorage) );

            let pageTitle = document.querySelector('.title');
            populateNotes(pageTitle);
        }
        else {
            currNote.remove();

            let noteObjIndex = noteStorage.findIndex( (object) => {
                return object.title === noteObj.title;
            });
            noteStorage.splice(noteObjIndex, 1);
            localStorage.setItem( `${storageName}NotesArr`, JSON.stringify(noteStorage) );

            let pageTitle = document.querySelector('.title');
            populateNotes(pageTitle);
        }

        */
    }

    function updateNoteCb(noteObj) {
        let inboxStorage = compStorage.getInboxStorage();
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

        editBtnContainer.addEventListener('click', () => editNote(note, noteObj));

        let deleteBtnContainer = document.createElement('div');
        deleteBtnContainer.classList.add('delete-btn-container');
        note.appendChild(deleteBtnContainer);

        deleteBtnContainer.addEventListener('click', () => deleteNote(note, noteObj));

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
    let blackOverlay = document.querySelector('.black-overlay');
    blackOverlay.remove();
}

export {
    closeCard,
    createCard,
    createBlackOverlay,
    removeBlackOverlay,
    noteFactory,
    createLandingPage,
    cards,
}