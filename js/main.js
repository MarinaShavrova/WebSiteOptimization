const HAMBURGER = document.querySelector(".hamburger");
const NAV_MENU = document.querySelector(".navbar-nav");


HAMBURGER.addEventListener("click",()=>{
    HAMBURGER.classList.toggle("active");
    NAV_MENU.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n=> n.addEventListener("click", ()=>{
    HAMBURGER.classList.remove("active");
    NAV_MENU.classList.remove("active");
})

)