const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 200);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2050,
    delay: 200,
    reset: true
});

sr.reveal('.hero-text',{origin: 'top'});
sr.reveal('.about-img, .services-items, .portfolio-container, .about-text',{origin: 'bottom'});
sr.reveal('.about-text h2, .text-center, .contact',{origin: 'bottom'});
sr.reveal('.footer',{origin: 'right'});

