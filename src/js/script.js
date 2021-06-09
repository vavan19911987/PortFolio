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
          arrowDown = document.querySelector('.arrow-down');

    hamburger.addEventListener('click', function () {
        menu.classList.add('active');
        arrowUp.classList.add('none');
        arrowDown.classList.add('none');

    });
    close.addEventListener('click', function () {
        menu.classList.remove('active');
        arrowUp.classList.remove('none');
        arrowDown.classList.remove('none');
    });

    


});


