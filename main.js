let bar = document.querySelector('.bars');
let navBar = document.querySelector('ul');
let bar1 = document.querySelector('.bar1');
let bar2 = document.querySelector('.bar2');
let bar3 = document.querySelector('.bar3');


bar.addEventListener('click', () => {
    navBar.classList.toggle('navToggle');
    bar1.classList.toggle('bar1Toggle');
    bar2.classList.toggle('bar2Toggle');
    bar3.classList.toggle('bar3Toggle');
});