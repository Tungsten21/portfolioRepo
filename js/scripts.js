"use strict";
let menuState = true;
skillsBtn.classList.toggle("activeTab");

function attachEventHandlers(){
    
    skillsBtn.addEventListener('click', ev => {
        if(!menuState){
            openMenu();
            attachMenuEventListeners();            
            menuState = true;
            skillsBtn.classList.toggle("activeTab");
            projectsBtn.classList.remove("activeTab");
        }else if(menuState){
            closeMenu();
            menuState = false;
            skillsBtn.classList.toggle("activeTab");
            projectsBtn.classList.remove("activeTab");
        }
    });
    
    projectsBtn.addEventListener('click', ev => {
       if(!menuState){
           skillsBtn.classList.remove("activeTab");
           projectsBtn.classList.toggle("activeTab");
       }else if(menuState){
            closeMenu();
            skillsBtn.classList.remove("activeTab");
            projectsBtn.classList.toggle("activeTab");
            menuState = false;
       }
        
        
    });

    function attachMenuEventListeners(){
        const frontEndBtn = document.getElementById("frontEndBtn");
        const backEndBtn = document.getElementById("backEndBtn");
        const miscBtn = document.getElementById("miscBtn");
        frontEndBtn.addEventListener('click', ev => {
            frontEndBtn.classList.toggle("activeTab2");
            backEndBtn.classList.remove("activeTab2");
            miscBtn.classList.remove("activeTab2");
        });
        backEndBtn.addEventListener('click', ev => {
            frontEndBtn.classList.remove("activeTab2");
            backEndBtn.classList.toggle("activeTab2");
            miscBtn.classList.remove("activeTab2");
        });
        miscBtn.addEventListener('click', ev => {
            frontEndBtn.classList.remove("activeTab2");
            backEndBtn.classList.remove("activeTab2");
            miscBtn.classList.toggle("activeTab2");
        });
    }

    attachMenuEventListeners();
    
}


function closeMenu(){
    const menu = document.getElementById("skillsMenu");
    while(menu.firstChild){
        menu.removeChild(menu.lastChild);
    }
    menu.style.width = "0";
    menu.style.minWidth = "0";
    menu.style.border = "none";
}

function openMenu(){
    const menu = document.getElementById("skillsMenu");

    const frontEnd = document.createElement('p');
    frontEnd.textContent = "Front End";
    frontEnd.id = "frontEndBtn";
    const backEnd = document.createElement('p');
    backEnd.textContent = "Back End";
    backEnd.id = "backEndBtn";
    const misc = document.createElement('p');
    misc.textContent = "Misc";
    misc.id = "miscBtn";

    menu.appendChild(frontEnd);
    menu.appendChild(backEnd);
    menu.appendChild(misc);

    menu.style.removeProperty("width");
    menu.style.removeProperty("min-width");
    menu.style.removeProperty("border");
}


attachEventHandlers();
