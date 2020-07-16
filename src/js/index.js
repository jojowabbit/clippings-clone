import '../css/main.css'

const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const path = document.querySelector('path');
const closePath = 'M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z';
const menuPath = 'M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z';

menu.addEventListener('click', () => {
    // Show Nav
    nav.classList.toggle('opacity-100');
    nav.classList.toggle('translate-x-0');
    nav.classList.toggle('pointer-events-auto');
    nav.classList.toggle('h-auto');
    //Hide Nav
    nav.classList.toggle('opacity-0');
    nav.classList.toggle('-translate-x-full');
    nav.classList.toggle('pointer-event-none');
    nav.classList.toggle('h-0');

    // Change Menu Toggle Path
    if (nav.classList.contains('opacity-100')) {
        path.setAttribute('d', closePath);
    }
    if (nav.classList.contains('opacity-0')) {
        path.setAttribute('d', menuPath);
    }

});

