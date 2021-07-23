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

function createNavBar() {
    const navBarContainer = document.createElement('div');
    navBarContainer.classList.add('nav-bar-container');

    navBarContainer.appendChild(createHamBtn());

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