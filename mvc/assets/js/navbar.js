
//DECLARE VARIABLES

var nav = document.getElementById('navbar');
var list = nav.querySelectorAll('a');

var navImages = ['img/pet-shop-veterinary-with-food-animals-vector.jpg', 'img/199709573426d727965f5e814c7b9c95.jpg', 'img/Double-Pet-Bowls-Dog-Food-Water-Feeder-Stainless-Steel-Pet-Drinking-Dish-Feeder-Cat-Puppy-Feeding.jpg_Q90.jpg_.webp', 'img/a7e48fe4d2898693bc984aaa937f3bb4.png'];
var dropUl = document.getElementsByClassName('drop-ul');
var dogCategoriesImg = document.getElementById('dogCategoriesPic');
var catCategoriesImg = document.getElementById('catCategoriesPic');
// var ulHeader = document.querySelectorAll(".drop-ul > li:first-child")
var picHeader = document.querySelectorAll('.li-header');
var sublists = document.querySelectorAll('.drop-ul > li');


/******* 1st NAVBAR EFFECT **********/
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    // nav.style.background =  "transparent";
    nav.style.background = 'rgba(255, 249, 192, 0.7)';
    nav.style.height = '3rem';
    list.forEach(element => {
      element.style.color = 'green';

    });

  } else {
    nav.style.background = 'green';
    nav.style.height = '6.9rem';
    list.forEach(element => {
      element.style.color = 'lightgrey';

    });
  }
};


/****** NAVBAR IMG BOX/HOVER *************/
function slides(event) {

  let slideShow = event.target.parentNode;

  picHeader.forEach((header) => {
    header.textContent = event.target.innerText;
  });
  // dogPicHeader.textContent = event.target.innerText
  // console.log(dogPicHeader.textContent)

  switch (slideShow) {
    case dropUl[0]:
      dogCategoriesImg.src = navImages[0];
      break;
    case dropUl[1]:
      dogCategoriesImg.src = navImages[1];
      break;
    case dropUl[2]:
      dogCategoriesImg.src = navImages[2];
      break;
    case dropUl[3]:
      dogCategoriesImg.src = navImages[3];
      break;
    case dropUl[4]:
      catCategoriesImg.src = navImages[0];
      break;
    case dropUl[5]:
      catCategoriesImg.src = navImages[1];
      break;
    case dropUl[6]:
      catCategoriesImg.src = navImages[2];
      break;
    case dropUl[7]:
      catCategoriesImg.src = navImages[3];
      break;
    case dropUl[8]:
      catCategoriesImg.src = navImages[1];
      break;
  }
}


sublists.forEach((list)=>{
  list.addEventListener('mouseenter', slides);
});




