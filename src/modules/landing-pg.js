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

let createLandingPage = (() => {
    const content = document.querySelector('#content');

    const navBar = createNavBar();
    
    content.appendChild(navBar);

    return content;
})();

export {
    createLandingPage
}