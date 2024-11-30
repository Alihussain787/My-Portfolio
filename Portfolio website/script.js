let suniconhide = document.getElementById("sun-icon");
let showmoon = document.getElementById("moon-icon");
let about = document.getElementById("about");
let skills = document.getElementById("skills");
let portfolio = document.getElementById("portfolio");
let testimonial = document.getElementById("testimonial");
let botbox = document.getElementById("bot-box");
let fcbox = document.getElementById("fc-box");
let navbox = document.getElementById("nav-box");
let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let icon = document.getElementById("sun-icon");
let spanbox = document.getElementById("span-box");
let hero = document.getElementById("hero");
let herobtn = document.getElementById("hero-btn");
let line1 = document.getElementById("div-line-1");
let line2 = document.getElementById("div-line-2");
let fb = document.getElementById("fb-icon");
let tw = document.getElementById("tw-icon");
let li = document.getElementById("li-icon");
let wh = document.getElementById("wh-icon");
let aboutspan = document.getElementById("about-span");
let portfoliobtn = document.getElementById("portfolio-btn");
let circle1 = document.getElementById("circle1");
let circle2 = document.getElementById("circle2");
let line_1 = document.getElementById("line1");
let line_2 = document.getElementById("line2");
let skbox1 = document.getElementById("sk-box1");
let skbox2 = document.getElementById("sk-box2");
let skbox3 = document.getElementById("sk-box3");
let skbox4 = document.getElementById("sk-box4");
let skbox5 = document.getElementById("sk-box5");
let skbox6 = document.getElementById("sk-box6");
let testspan1 = document.getElementById("testi-span-1");
let testspan2 = document.getElementById("testi-span-2");
let testdiv = document.getElementById("testi-div");
let borbox1 = document.getElementById("bor-box-1");
let borbox2 = document.getElementById("bor-box-2");
let borbox3 = document.getElementById("bor-box-3");
let borbox4 = document.getElementById("bor-box-4");
let fc_box_1 = document.getElementById("fc-box-1");
let fc_box_2 = document.getElementById("fc-box-2");
let fc_box_3 = document.getElementById("fc-box-3");
let fb_icon = document.getElementById("fb");
let tw_icon = document.getElementById("tw");
let li_icon = document.getElementById("li");
let wh_icon = document.getElementById("wh");
let email_icon = document.getElementById("email-icon");
let phone_icon = document.getElementById("phone-icon");
let location_icon = document.getElementById("location-icon");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let openMenuBtn = document.getElementById("open-btn");
let closeMenuBtn = document.getElementById("close-btn");
let nav_links = document.getElementById("nav_links");

const mouseEnterEvent1 = document.getElementById("portfolio-image-1");
const box1 = document.getElementById("text-box-1");

const mouseEnterEvent2 = document.getElementById("portfolio-image-2");
const box2 = document.getElementById("text-box-2");

const mouseEnterEvent3 = document.getElementById("portfolio-image-3");
const box3 = document.getElementById("text-box-3");

const mouseEnterEvent4 = document.getElementById("portfolio-image-4");
const box4 = document.getElementById("text-box-4");

const mouseEnterEvent5 = document.getElementById("portfolio-image-5");
const box5 = document.getElementById("text-box-5");

const mouseEnterEvent6 = document.getElementById("portfolio-image-6");
const box6 = document.getElementById("text-box-6");

mouseEnterEvent1.addEventListener("mouseenter", () => {
    box1.style.display = "block";
})
mouseEnterEvent1.addEventListener("mouseleave", () => {
    box1.style.display = "none";
})

mouseEnterEvent2.addEventListener("mouseenter", () => {
    box2.style.display = "block";
})
mouseEnterEvent2.addEventListener("mouseleave", () => {
    box2.style.display = "none";
})

mouseEnterEvent3.addEventListener("mouseenter", () => {
    box3.style.display = "block";
})
mouseEnterEvent3.addEventListener("mouseleave", () => {
    box3.style.display = "none";
})

mouseEnterEvent4.addEventListener("mouseenter", () => {
    box4.style.display = "block";
})
mouseEnterEvent4.addEventListener("mouseleave", () => {
    box4.style.display = "none";
})

mouseEnterEvent5.addEventListener("mouseenter", () => {
    box5.style.display = "block";
})
mouseEnterEvent5.addEventListener("mouseleave", () => {
    box5.style.display = "none";
})

mouseEnterEvent6.addEventListener("mouseenter", () => {
    box6.style.display = "block";
})
mouseEnterEvent6.addEventListener("mouseleave", () => {
    box6.style.display = "none";
})

function darkMode(){
    suniconhide.classList.toggle("sun-icon-hide");
    showmoon.classList.toggle("show-moon");
    document.body.classList.toggle('dark-mode');
    about.classList.toggle("about-dark");
    skills.classList.toggle("skills-dark");
    portfolio.classList.toggle("portfolio-dark");
    testimonial.classList.toggle("testimonial-dark");
    botbox.classList.toggle("bot-box-dark");
    navbox.classList.toggle("nav-dark");
    link1.classList.toggle("link-box");
    link2.classList.toggle("link-box");
    link3.classList.toggle("link-box");
    icon.classList.toggle("icon-dark");
    spanbox.classList.toggle("span-dark");
    herobtn.classList.toggle("button-dark");
    line1.classList.toggle("line-dark");
    line2.classList.toggle("line-dark");
    fb.classList.toggle("icon-dark");
    tw.classList.toggle("icon-dark");
    li.classList.toggle("icon-dark");
    wh.classList.toggle("icon-dark");
    aboutspan.classList.toggle("about-span-dark");
    portfoliobtn.classList.toggle("portfolio-btn-dark");
    circle1.classList.toggle("circle-dark");
    circle2.classList.toggle("circle-dark");
    line_1.classList.toggle("line-dark");
    line_2.classList.toggle("line-dark");
    skbox1.classList.toggle("sk-box-dark");
    skbox2.classList.toggle("sk-box-dark");
    skbox3.classList.toggle("sk-box-dark");  
    skbox4.classList.toggle("sk-box-dark");
    skbox5.classList.toggle("sk-box-dark");
    skbox6.classList.toggle("sk-box-dark");
    testspan1.classList.toggle("testimonial-span-dark");
    testspan2.classList.toggle("testimonial-span-dark");
    testdiv.classList.toggle("testimonial-div-dark");
    borbox1.classList.toggle("footer-bor-dark");
    borbox2.classList.toggle("footer-bor-dark");
    borbox3.classList.toggle("footer-bor-dark");
    borbox4.classList.toggle("footer-bor-dark");
    fc_box_1.classList.toggle("fc-dark");
    fc_box_2.classList.toggle("fc-dark");
    fc_box_3.classList.toggle("fc-dark");
    fb_icon.classList.toggle("fi-dark");
    tw_icon.classList.toggle("fi-dark");
    li_icon.classList.toggle("fi-dark");
    wh_icon.classList.toggle("fi-dark");
    email_icon.classList.toggle("fc-icon-dark");
    phone_icon.classList.toggle("fc-icon-dark");
    location_icon.classList.toggle("fc-icon-dark");
    box1.classList.toggle("text-box-dark");
    box2.classList.toggle("text-box-dark");
    box3.classList.toggle("text-box-dark");
    box4.classList.toggle("text-box-dark");
    box5.classList.toggle("text-box-dark");
    box6.classList.toggle("text-box-dark");
    btn1.classList.toggle("btn");
    btn2.classList.toggle("btn");
    btn3.classList.toggle("btn");
    btn4.classList.toggle("btn");
    btn5.classList.toggle("btn");
    btn6.classList.toggle("btn");
    nav_links.classList.toggle("nav_links_dark");
    hero.classList.toggle("dark");
} 

    openMenuBtn.addEventListener("click", () => {
       nav_links.style.transform = "translateY(0)";
       openMenuBtn.style.display = "none";
       closeMenuBtn.style.display = "block";
    })
    closeMenuBtn.addEventListener("click", () => {
        nav_links.style.transform = "translateY(-100%)";
        closeMenuBtn.style.display = "none";
        openMenuBtn.style.display = "block";
     })