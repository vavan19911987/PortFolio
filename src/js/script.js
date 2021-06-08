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

});


