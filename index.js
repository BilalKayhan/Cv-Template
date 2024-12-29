const profileElement=document.querySelector(".profileInfo");
const skillsElement=document.querySelector("#skills")
const languagesElement=document.querySelector("#languages")
const workElement=document.querySelector(".job")
const schoolElement=document.querySelector(".school")
fetch("./database.json")
.then(response => response.json())
.then(data =>{
    data.profileInfo.forEach(profile => {
        const profileItem = `   
        <li><a href=""><i class="${profile.class}"></i>${profile.title}</a></li>
        `;
        profileElement.innerHTML += profileItem;
    });
    data.skills.forEach(skill => {
        const skillItem =`
        <h6>${skill.name}</h6>
        <div class="upper-skill">
        <div class="lower-skill" style="width:${skill.level}%";">${skill.level}%</div>
        </div>
        `;
        skillsElement.innerHTML += skillItem;
    });
    data.languages.forEach(language => {
        const languageItem=`
        <h6>${language.languageName}</h6>
        <div class="upper-skill">
        <div class="lower-skill" style="width:${language.level}%;">${language.level}</div>
        </div>
        `;
        languagesElement.innerHTML +=languageItem;
    });
    data.workExperience.forEach(work=> {
        const workItem =`
        <h3>${work.company}</h3>
        <li><a href=""><i class="fa-regular fa-calendar-days"></i>${work.startDate}-<span class="job-date">${work.endDate}</span></a></li>
        <p class="job-description">
            ${work.description}
        </p>
        `;
        workElement.innerHTML +=workItem;
    });
    data.educations.forEach(education=> {
        const educationItem =`
        <h3>${education.school}</h3>
        <li><a href=""><i class="fa-regular fa-calendar-days"></i>${education.startDate} - ${education.endDate}</a></li>
        <p class="school-degree">
            ${education.description}
        </p>
        `;
        schoolElement.innerHTML+=educationItem;
    });
})