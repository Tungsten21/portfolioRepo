"use strict";
let menuState = true;
skillsBtn.classList.toggle("activeTab");

skillsBtn.addEventListener('click', ev => {
    const skillsMenu = document.getElementById("skillsMenu");
    const skillsBtn = document.getElementById("skillsBtn");
    
    if(menuState){
        skillsMenu.style.width = "0";
        skillsMenu.style.minWidth = "0";
        menuState = false;
        skillsBtn.classList.toggle("activeTab");
    }else if(!menuState){
        skillsMenu.style.minWidth = "140px";
        skillsMenu.style.width = "20%";
        menuState = true;
        skillsBtn.classList.toggle("activeTab");
        projectsBtn.classList.remove("activeTab");
    }
});

projectsBtn.addEventListener('click', ev => {
    const skillsMenu = document.getElementById("skillsMenu");
    const projectsBtn = document.getElementById("projectsBtn");

    if(menuState){
        skillsMenu.style.width = "0";
        skillsMenu.style.minWidth = "0";
        menuState = false;
        skillsBtn.classList.toggle("activeTab");
        projectsBtn.classList.toggle("activeTab");
    }else if(!menuState){
        projectsBtn.classList.toggle("activeTab");
    }
});

