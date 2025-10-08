// ---------toggle icon navbar----//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let btn = document.getElementById("readMoreBtn");
btn.addEventListener('click', () => {
    const moreText = document.querySelector(".more-text");
    const dots = document.querySelector(".dots");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        dots.style.display = "none";
        btn.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        dots.style.display = "inline";
        btn.innerHTML = "Read More";
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

        sections.forEach(section => {
            let sectionTop = section.offsetTop - 150;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Use attribute selector with quotes
                document.querySelector(`header nav a[href="#${sectionId}"]`).classList.add('active');
            }
        });

        // --------------toggle sticky header-----------//
        let header = document.querySelector('header');
        header.classList.toggle('sticky', scrollY > 100);

        // --------------remove toggle icon and navbar-----------//
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// scroll reveal//

document.addEventListener('DOMContentLoaded', function() {
    // Check if ScrollReveal is defined
    if (typeof ScrollReveal === 'function') {
        const sr = ScrollReveal({
            // reset:true,
            distance:'80px',
            duration:2000,
            delay:200
        });

        sr.reveal('.home-content, .heading', {origin: 'top'});
        sr.reveal('.home-img, .skill-container, .certificate-img, .Contact form', {origin: 'bottom'});
        sr.reveal('.home-content h1, .about-img', {origin: 'left'});
        sr.reveal('.home-content p, .about-content', {origin: 'right'});
    } else {
        console.error('ScrollReveal is not defined. Check if the library is loaded correctly.');
    }
});


  