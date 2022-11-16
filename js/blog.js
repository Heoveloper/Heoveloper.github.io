//선택자
//home
const $home = document.querySelector(".wrapper");
//about contents
const $about = document.querySelector(".about");
//skills contents
const $skills = document.querySelector(".skills");
//project contents
const $project = document.querySelector(".project");
//education contents
const $education = document.querySelector(".education");
//contact contents
const $contact = document.querySelector(".contact");

//메뉴 클릭 시 해당 콘텐츠로 스크롤 이동
gnb_home.addEventListener('click', e => {
    e.preventDefault();
    $home.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})

menu_home.addEventListener('click', e => {
    e.preventDefault();
    $home.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})

gnb_about.addEventListener('click', e => {
    e.preventDefault();
    $about.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})

menu_about.addEventListener('click', e => {
    e.preventDefault();
    $about.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})

gnb_skills.addEventListener('click', e => {
    e.preventDefault();
    $skills.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})

menu_skills.addEventListener('click', e => {
    e.preventDefault();
    $skills.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})

gnb_project.addEventListener('click', e => {
    e.preventDefault();
    $project.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})

menu_project.addEventListener('click', e => {
    e.preventDefault();
    $project.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})

menu_education.addEventListener('click', e => {
    e.preventDefault();
    $education.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})

gnb_contact.addEventListener('click', e => {
    e.preventDefault();
    $contact.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})

menu_contact.addEventListener('click', e => {
    e.preventDefault();
    $contact.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})