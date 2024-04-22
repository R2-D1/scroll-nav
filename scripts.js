const navToggle = document.querySelector('#js-nav-toggle');
const nav = document.querySelector('#js-nav');
const navItems = document.querySelectorAll('.js-nav-link');
const sections = document.querySelectorAll('.section[id]');
const documenBody = document.body;
const navOverlay = document.querySelector('#js-nav-overlay');


navToggle.addEventListener('click', toggleNav);

navItems.forEach((element) => {
    element.addEventListener('click', toggleNav);
});

function toggleNav() {
    nav.classList.toggle('nav_active');
    navToggle.classList.toggle('burger_active');
    documenBody.classList.toggle('no-scroll');
}

navOverlay.addEventListener('click', () => {
    nav.classList.toggle('nav_active');
    navToggle.classList.toggle('burger_active');
    documenBody.classList.toggle('no-scroll');
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entrie) => {
        const entrieElement = entrie.target;
        const id = entrieElement.id;
        const navElement = document.querySelector(`.nav__link[href="#${id}"]`);

        if (entrie.isIntersecting) {
            navElement.classList.add('nav__link_active');
        } else {
            navElement.classList.remove('nav__link_active');
        }

    })
}, { root: document, rootMargin: "-50% 0px" });


sections.forEach((section) => {
    observer.observe(section);
});



