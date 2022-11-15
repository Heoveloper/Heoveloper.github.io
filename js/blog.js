//home
const $home = document.querySelector(".wrapper");
//about contents
const $about = document.querySelector(".about");
//skills contents
const $skills = document.querySelector(".skills");

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