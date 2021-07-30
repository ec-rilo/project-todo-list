import {switchTabs} from './note-logic.js';

const tabPagePopulation = (() => {
    const inboxTab = document.querySelector('.inbox-tab');
    const todayTab = document.querySelector('.today-tab');
    const thisWeekTab = document.querySelector('.this-week-tab');
    const projectsTab = document.querySelector('.projects-tab');
    const tabArr = [inboxTab, todayTab, thisWeekTab, projectsTab];

    inboxTab.addEventListener('click', () => {
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});
        inboxTab.style.fontWeight = 'bold';
        switchTabs();
    });

    todayTab.addEventListener('click', () => {
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});
        todayTab.style.fontWeight = 'bold';
        switchTabs()
    });

    thisWeekTab.addEventListener('click', () => {
        tabArr.forEach(tab => {tab.style.fontWeight = 'normal'});
        thisWeekTab.style.fontWeight = 'bold';
        switchTabs()
    });

});

function defaultTabLoad() {
    switchTabs();
}

export {
    tabPagePopulation,
    defaultTabLoad
}