'use strict';

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

        const tabText = document.createElement('p');
        tabText.classList.add(tabClassNamesArr[i]);
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

function createContentContainer() {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    contentContainer.appendChild(createLeftContentContainer());

    return contentContainer;
}

{/* <div class="content-container">
        <div class="left-content-container">
            <ul class="tabs-container">
                <li class="tab"><p class="inbox-tab">Inbox</p></li>
                <li class="tab"><p class="today-tab">Today</p></li>
                <li class="tab"><p class="this-week-tab">This Week</p></li>
                <li class="tab"><p class="projects-tab">Projects</p></li>
            </ul>
        </div>

        <div class="right-content-container">
            <div class="right-content-info-container">
                <p class="title">Today</p>
            </div>
            <p class="no-content-text">There's Nothing Here...</p>
        </div>
    </div> */}

let createLandingPage = (() => {
    const landingPageDiv = document.createElement('div');
    landingPageDiv.classList.add('landing-page-div');

    const navBar = createNavBar();
    const contentContainer = createContentContainer();
    
    landingPageDiv.appendChild(navBar);
    landingPageDiv.appendChild(contentContainer);

    return landingPageDiv;
})();

export {
    createLandingPage
}