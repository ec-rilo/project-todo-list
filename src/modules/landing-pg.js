import hamburgerMenuImg from '../images/menu.png';

function createNavBar() {
    const navBarContainer = document.createElement('div');
    navBarContainer.classList.add('nav-bar-container');

    const hamburgerMenuBtn = document.createElement('img');
    hamburgerMenuBtn.classList.add('small-btn', 'menu-btn');
    hamburgerMenuBtn.setAttribute('src', hamburgerMenuImg);
    navBarContainer.appendChild(hamburgerMenuBtn);

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