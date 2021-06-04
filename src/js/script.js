window.addEventListener('DOMContentLoaded', function () {


    // смена цвета к иконок соцсети
    let color = document.querySelectorAll('.colors');

    for (let i = 0; i < color.length; i++) {
        color[i].onmouseover = function () {
            this.setAttribute("style", "color:green;");
        };
        color[i].onmouseout = function () {
            this.setAttribute("style", "color:white;");

        };

    }
    // сьена цвета кнопки
    let btn = document.querySelectorAll('.btn');

    for (let i = 0; i < btn.length; i++) {
        btn[i].onmouseover = function () {
            this.setAttribute("style", "background:green;");
        };
        btn[i].onmouseout = function () {
            this.setAttribute("style", "background:none;");
        };


    }

    if (btn == 'background:green') {
        this.setAttribute("style", "display: block;");
    }



});


    // let color = document.querySelectorAll(".colors");

    // color.onmouseover = function () {
    //     this.setAttribute("style", "color:red;");
    // };
    // color.onmouseout = function () {
    //     this.setAttribute("style", "color:white;");

    // };