'use strict';

/* Nav Bar Code */

function createHamBtn() {
    const hamBtnContainer = document.createElement('a');
    hamBtnContainer.setAttribute('href', '#');
    hamBtnContainer.classList.add('ham-btn-container');

    const numOfHamBtnBody = 3
    for (let i = 0; i < numOfHamBtnBody; ++i) {
        const hamBtnLayer = document.createElement('div');
        hamBtnLayer.classList.add('ham-btn-layer');
        hamBtnContainer.appendChild(hamBtnLayer);
    }

    return hamBtnContainer;
}

function createIncrementNoteBtn() {
    const incrementBtn = document.createElement('a');
    incrementBtn.setAttribute('href', '#');
    incrementBtn.classList.add('increment-note-btn');

    const incrementBtnTxt = document.createElement('p');
    incrementBtnTxt.innerHTML = '+';
    incrementBtnTxt.classList.add('increment-note-text');
    incrementBtn.appendChild(incrementBtnTxt);

    return incrementBtn;
}

function createLoginBtn() {
    const loginBtn = document.createElement('button');
    loginBtn.innerHTML = 'Sign in';
    loginBtn.classList.add('login-btn');

    return loginBtn;
}

function createNavBar() {
    const navBarContainer = document.createElement('div');
    navBarContainer.classList.add('nav-bar-container');
    
    navBarContainer.appendChild(createHamBtn());
    navBarContainer.appendChild(createIncrementNoteBtn());
    navBarContainer.appendChild(createLoginBtn());

    return navBarContainer;
}

/* Content Container Code */

function createTabsContainer() {
    const tabsContainer = document.createElement('ul');
    tabsContainer.classList.add('tabs-container');

    const numOfTabs = 4;
    const tabNamesArr = ['Inbox', 'Today', 'This Week', 'Projects'];
    const tabClassNamesArr = ['inbox-tab', 'today-tab', 'this-week-tab', 'projects-tab'];
    
    for (let i = 0; i < numOfTabs; ++i) {
        const tab = document.createElement('li');
        tab.classList.add('tab');
        tabsContainer.appendChild(tab);

        const tabText = document.createElement('a');
        tabText.setAttribute('href', '#');
        tabText.classList.add(tabClassNamesArr[i]);
        tabText.classList.add('single-tab');
        tabText.innerHTML = tabNamesArr[i];
        tab.appendChild(tabText);
    }

    return tabsContainer;
}

function createLeftContentContainer() {
    const leftContentContainer = document.createElement('div');
    leftContentContainer.classList.add('left-content-container');

    leftContentContainer.appendChild(createTabsContainer());

    return leftContentContainer;
}

function createRightContentContainer() {
    const rightContentContainer = document.createElement('div');
    rightContentContainer.classList.add('right-content-container');

    const rightContentInfoContainer = document.createElement('div');
    rightContentInfoContainer.classList.add('right-content-info-container');
    rightContentContainer.appendChild(rightContentInfoContainer);

    const title = document.createElement('p');
    title.classList.add('title');
    title.innerHTML = 'Today';

    rightContentInfoContainer.appendChild(title);

    const noContentNotif = document.createElement('p');
    noContentNotif.classList.add('no-content-text');
    noContentNotif.innerHTML = 'There\'s Nothing Here...';

    rightContentContainer.appendChild(noContentNotif);

    return rightContentContainer;
}

function createContentContainer() {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    contentContainer.appendChild(createLeftContentContainer());
    contentContainer.appendChild(createRightContentContainer());

    return contentContainer;
}

/* Create Landing Page Code */

let createLandingPage = (() => {
    const landingPageDiv = document.createElement('div');
    landingPageDiv.classList.add('landing-page-div');

    const navBar = createNavBar();
    const contentContainer = createContentContainer();
    
    landingPageDiv.appendChild(navBar);
    landingPageDiv.appendChild(contentContainer);

    return landingPageDiv;
});

export {
    createLandingPage
}