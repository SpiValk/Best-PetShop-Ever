var nav = document.getElementById('navbar');
var list = nav.querySelectorAll('a');
// var display = document.querySelector(".ul-image-box")
var dogCategoriesImg = document.getElementById("dogCategoriesPic")
var catCategoriesImg = document.getElementById("catCategoriesPic")
var dogImages = ["img/pet-shop-veterinary-with-food-animals-vector.jpg", "img/199709573426d727965f5e814c7b9c95.jpg", 'img/Double-Pet-Bowls-Dog-Food-Water-Feeder-Stainless-Steel-Pet-Drinking-Dish-Feeder-Cat-Puppy-Feeding.jpg_Q90.jpg_.webp', 'img/a7e48fe4d2898693bc984aaa937f3bb4.png']
var dogDropUl = document.getElementsByClassName("drop-ul")
var ulHeader = document.querySelectorAll(".drop-ul > li:first-child")
var dogPicHeader = document.querySelectorAll(".dog-li-header")
var dogSublists = document.querySelectorAll(".drop-ul > li")

console.log(dogSublists)


window.onscroll = function () {
    if (window.pageYOffset > 100) {
        // nav.style.background =  "transparent";
        nav.style.background = "rgba(255, 249, 192, 0.7)";
        list.forEach(element => {
            element.style.color = "green";

        })

    } else {
        nav.style.background = "green";
        list.forEach(element => {
            element.style.color = "lightgrey";

        })
    }
}

function slides(event) {

    let slideShow = event.target.parentNode

    dogPicHeader.forEach((header) => {
        header.textContent = event.target.innerText
    })
    // dogPicHeader.textContent = event.target.innerText
    console.log(dogPicHeader.textContent)

    switch (slideShow) {
        case dogDropUl[0]:
            dogCategoriesImg.src = dogImages[0]
            break;
        case dogDropUl[1]:
            dogCategoriesImg.src = dogImages[1]
            break;
        case dogDropUl[2]:
            dogCategoriesImg.src = dogImages[2]
            break;
        case dogDropUl[3]:
            dogCategoriesImg.src = dogImages[3]
            break;
        case dogDropUl[4]:
            catCategoriesImg.src = dogImages[0]
            break;
        case dogDropUl[5]:
            catCategoriesImg.src = dogImages[1]
            break;
        case dogDropUl[6]:
            catCategoriesImg.src = dogImages[2]
            break;
        case dogDropUl[7]:
            catCategoriesImg.src = dogImages[3]
            break;
        case dogDropUl[8]:
            catCategoriesImg.src = dogImages[1]
            break;
    }
}





dogSublists.forEach((list)=>{
    list.addEventListener("mouseenter", slides)
})

// for (let j in dogSublists) {
//     dogSublists[j].addEventListener("mouseenter", slides)
// }


