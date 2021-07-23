import hamburgerMenuImg from '../images/menu.png';

function createNavBar() {
    const navBarContainer = document.createElement('div');
    navBarContainer.classList.add('nav-bar-container');

    

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