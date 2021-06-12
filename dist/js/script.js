window.addEventListener('DOMContentLoaded', function () {


    // смена цвета к иконок соцсети
    let color = document.querySelectorAll('.colors');

    for (let i = 0; i < color.length; i++) {
        color[i].addEventListener('mouseover', function () {
            this.setAttribute("style", "color:green;");
        });
        color[i].addEventListener('mouseout', function () {
            this.setAttribute("style", "color:white;");
        });
    }

    // сьена цвета кнопки
    let btn = document.querySelectorAll('.btn');

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('mouseover', function () {
            this.setAttribute("style", "background:green;");
        });
        btn[i].addEventListener('mouseout', function () {
            this.setAttribute("style", "background:none;");
        });
    }
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close'),
        arrowUp = document.querySelector('.arrow-up'),
        arrowDown = document.querySelector('.arrow-down'),
        containers = document.querySelector('.nones'),
        sidepanel = document.querySelector('.sidepanel'),
        hamburgers = document.querySelector('.hamburger'),
        menuNone = document.querySelectorAll('.menu__link > a');

    hamburger.addEventListener('click', function () {
        menu.classList.add('active');
        arrowUp.classList.add('none');
        arrowDown.classList.add('none');
        containers.classList.add('none');
        sidepanel.classList.add('none');
        hamburgers.classList.add('none');

    });
    close.addEventListener('click', function () {
        menu.classList.remove('active');
        arrowUp.classList.remove('none');
        arrowDown.classList.remove('none');
        containers.classList.remove('none');
        sidepanel.classList.remove('none');
        hamburgers.classList.remove('none');
    });

    for (let i = 0; i < menuNone.length; i++) {
        menuNone[i].addEventListener('click', function () {
            menu.classList.remove('active');
            arrowUp.classList.remove('none');
            arrowDown.classList.remove('none');
            containers.classList.remove('none');
            sidepanel.classList.remove('none');
            hamburgers.classList.remove('none');
        });
    }

});


