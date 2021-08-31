
//DECLARE VARIABLES

var nav = document.getElementById('navbar');
var list = nav.querySelectorAll('a');


window.onscroll = function () {
    if (window.pageYOffset > 100) {
        // nav.style.background =  "transparent";
        nav.style.background = "rgba(255, 249, 192, 0.7)";
        nav.style.height = "3rem";
        list.forEach(element => {
            element.style.color = "green";

        })

    } else {
        nav.style.background = "green";
        nav.style.height = "6.9rem";
        list.forEach(element => {
            element.style.color = "lightgrey";

        })
    }
}



