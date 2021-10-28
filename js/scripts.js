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
            populateFrontEnd();
        });
        backEndBtn.addEventListener('click', ev => {
            frontEndBtn.classList.remove("activeTab2");
            backEndBtn.classList.toggle("activeTab2");
            miscBtn.classList.remove("activeTab2");
            populateBackEnd();
        });
        miscBtn.addEventListener('click', ev => {
            frontEndBtn.classList.remove("activeTab2");
            backEndBtn.classList.remove("activeTab2");
            miscBtn.classList.toggle("activeTab2");
            populateMisc();
        });
    }

    fromSender.addEventListener('keyup', ev => {
        if(validateEmail() == true){
            fromSender.classList.remove("invalid");
            fromSender.classList.add("valid");
        }else{
            fromSender.classList.remove("valid");
            fromSender.classList.add("invalid");
        }
    });

    sendBtn.addEventListener('click', ev => {
        if(validateEmail() == true){
            console.log("passed");
            sendMail();
            fromSender.value = "";
            message.value = "";
            alert("Your message has been sent, thank you!");
        }else{
            alert("Please enter a valid email");
        }
    })
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

function populateFrontEnd(){
    let contentCon = document.getElementById("skillsContent");
    while(contentCon.firstChild){
        contentCon.removeChild(contentCon.lastChild);
    }
    const headerText = document.createElement('p');
    headerText.textContent = "These are relevant Front End development skills I have aquired:";

    const s1 = {
        skillName: "HTML",
        expBarWidth: "80%",
        expSince: "2018"
    }
    const s2 = {
        skillName: "CSS",
        expBarWidth: "70%",
        expSince: "2018"
    }
    const s3 = {
        skillName: "JS",
        expBarWidth: "75%",
        expSince: "2019"
    }
    const s4 = {
        skillName: "BootStrap",
        expBarWidth: "65%",
        expSince: "2018"
    }

    const frontEndSkills = [s1, s2, s3, s4];
    contentCon.appendChild(headerText);

    let skillsContainer = document.createElement('div');

    skillsContainer.classList.add("skillsContentContainer");
    skillsContainer.id = "skillsContentCon";
    contentCon.appendChild(skillsContainer);
    
    for(let i = 0; i < frontEndSkills.length; i++){
     populateSkills(frontEndSkills[i].skillName, frontEndSkills[i].expBarWidth,
        frontEndSkills[i].expSince);
    }
}

function populateBackEnd(){
    let contentCon = document.getElementById("skillsContent");
    while(contentCon.firstChild){
        contentCon.removeChild(contentCon.lastChild);
    }
    const headerText = document.createElement('p');
    headerText.textContent = "These are relevant Back End development skills I have aquired:";

    const s1 = {
        skillName: "C#",
        expBarWidth: "85%",
        expSince: "2020"
    }
    const s2 = {
        skillName: "Java",
        expBarWidth: "85%",
        expSince: "2019"
    }
    const s3 = {
        skillName: "Scala",
        expBarWidth: "85%",
        expSince: "2018"
    }
    const s4 = {
        skillName: "PHP",
        expBarWidth: "65%",
        expSince: "2019"
    }
    const s5 = {
        skillName: "SQL",
        expBarWidth: "75%",
        expSince: "2018"
    }
    const s6 = {
        skillName: "AzureSQL",
        expBarWidth: "65%",
        expSince: "2020"
    }
    const s7 = {
        skillName: "Asp.Net",
        expBarWidth: "65%",
        expSince: "2020"
    }

    const backEndSkills = [s1, s2, s3, s4, s5, s6, s7];
    contentCon.appendChild(headerText);

    let skillsContainer = document.createElement('div');

    skillsContainer.classList.add("skillsContentContainer");
    skillsContainer.id = "skillsContentCon";
    contentCon.appendChild(skillsContainer);
    
    for(let i = 0; i < backEndSkills.length; i++){
     populateSkills(backEndSkills[i].skillName, backEndSkills[i].expBarWidth,
        backEndSkills[i].expSince);
    }
}

function populateMisc(){
    let contentCon = document.getElementById("skillsContent");
    while(contentCon.firstChild){
        contentCon.removeChild(contentCon.lastChild);
    }
    const headerText = document.createElement('p');
    headerText.textContent = "These are other Miscellaneous development skills I have aquired:";

    const s1 = {
        skillName: "GitHub",
        expBarWidth: "85%",
        expSince: "2019"
    }
    const s2 = {
        skillName: "TDD",
        expBarWidth: "90%",
        expSince: "2018"
    }
    const s3 = {
        skillName: "Agile",
        expBarWidth: "85%",
        expSince: "2018"
    }

    const miscSkills = [s1, s2, s3];
    contentCon.appendChild(headerText);

    let skillsContainer = document.createElement('div');

    skillsContainer.classList.add("skillsContentContainer");
    skillsContainer.id = "skillsContentCon";
    contentCon.appendChild(skillsContainer);

    for(let i = 0; i < miscSkills.length; i++){
        populateSkills(miscSkills[i].skillName, miscSkills[i].expBarWidth,
           miscSkills[i].expSince);
       }


}

function populateSkills(skillNameI, expBarWidthI, expSicneTxtI){
    let skillCon = document.createElement('div');
    let skillName = document.createElement('h1');
    let outerExpBar = document.createElement('div');
    let expBar = document.createElement('div');
    let expSinceTxt = document.createElement('p');

    skillCon.classList.add("skill");
    outerExpBar.classList.add("outerExpBar");
    expBar.classList.add("expBar");

    outerExpBar.appendChild(expBar);
    skillCon.appendChild(skillName);
    skillCon.appendChild(outerExpBar);
    skillCon.appendChild(expSinceTxt);

    skillName.textContent = skillNameI;
    expBar.style.width = expBarWidthI;
    expSinceTxt.textContent = "Exp. Since: " + expSicneTxtI;

    skillsContentCon.appendChild(skillCon);
}

function validateEmail(){
    let emailTxtNode = document.getElementById("fromSender");
    const emailTxt = emailTxtNode.value;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regExObj = new RegExp(re);
    let result = regExObj.test(emailTxt);
    return result;
}

function sendMail(){
    let message = document.getElementById("fromSender").value;
    var tempParams = {
        from_name: document.getElementById("fromSender").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_wy3nnou', 'template_1wrp1il', tempParams);
}

attachEventHandlers();
populateFrontEnd();
