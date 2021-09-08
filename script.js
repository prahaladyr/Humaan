let scrollpos = window.scrollY;
const favicon_add = document.querySelector("div");
const favicon_height = favicon_add.offsetHeight;
console.log(favicon_height);

const add_class_favicon = () => favicon_add.classList.add("favicon-fadein");
const remove_class_favicon = () =>
    favicon_add.classList.remove("favicon-fadein");

window.addEventListener("scroll", function () {
    scrollpos = window.scrollY;

    if (scrollpos >= favicon_height) {
        add_class_favicon();
    } else {
        remove_class_favicon();
    }
    console.log(scrollpos);
});

let elementsArray = document.querySelectorAll("section, .list-container");
window.addEventListener("scroll", fadeIn);
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i];
        var distInView =
            elem.getBoundingClientRect().top - window.innerHeight + 50;
        if (distInView < 0) {
            elem.classList.add("fade-in");
        } else {
            elem.classList.remove("fade-in");
        }
    }
}
fadeIn();

const targetHover = document.querySelector("div");
const navbarToggle = document.querySelector(".navbar");

targetHover.addEventListener("mouseover", nav_hover_in, false);
function nav_hover_in() {
    navbarToggle.classList.add("navbar-onhover");
    targetHover.classList.add("disable-favicon");
}

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        navbarToggle.classList.remove("navbar-onhover");
        targetHover.classList.remove("disable-favicon");
    } else {
        navbarToggle.classList.remove("navbar-onhover");
        targetHover.classList.remove("disable-favicon");
    }
    lastScrollY = window.scrollY;
});
