const skillsName = document.querySelectorAll('.section2__name');

skillsName.forEach((name) => {
    name.addEventListener('click', () => {
        name.classList.toggle('active');
    });
    });