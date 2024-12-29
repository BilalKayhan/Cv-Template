const profileElement=document.querySelector(".profileInfo");
const skillsElement=document.querySelector("#skills")
const languagesElement=document.querySelector("#languages")
fetch("./database.json")
.then(response => response.json())
.then(data =>{
    data.profileInfo.forEach(profile => {
        const profileItem = `   
        <li><a href=""><i class="${profile.class}"></i>${profile.title}</a></li>
        `;
        profileElement.innerHTML += profileItem;
        console.log(profileElement);
    });
    data.skills.forEach(skill => {
        const skillItem =`
        <h6>${skill.name}</h6>
        <div class="upper-skill">
        <div class="lower-skill" style="width:${skill.level}%";">${skill.level}%</div>
        </div>
        `;
        skillsElement.innerHTML += skillItem
    });
    data.languages.forEach(language => {
        const languageItem=`
        <h6>${language.languageName}</h6>
        <div class="upper-skill">
        <div class="lower-skill" style="width:${language.level}%;">${language.level}</div>
        </div>
        `;
        languagesElement.innerHTML +=languageItem
    })
})