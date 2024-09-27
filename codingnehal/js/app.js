const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        // console.log(top, offset, height, id)

        if (top >= offset && top < offset + height) { // agr scroll zaada ho section ki doori se AUR scrolling kam hi section ki doori + height se
            // active navbar links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
                document.querySelector(`header nav a[href='#${id}']`).classList.add('active');
            })
        }
    })

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active');
}