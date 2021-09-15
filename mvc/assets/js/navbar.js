
//DECLARE VARIABLES
var nav = document.getElementById('navbar');
var list = nav.querySelectorAll('a');

var navImages = ['/img/index_img/pet-shop-veterinary-with-food-animals-vector.jpg', '/img/index_img/shampoo.jpg', '/img/index_img/Bowls.webp', '/img/index_img/PetsCare.png'];
var fishNavImages = ['/img/index_img/fish-food.jpg', '/img/index_img/aquarium.jpg', '/img/index_img/filter.webp', 'img/index_img/fish-care.jpg'];
var birdNavImages = ['/img/index_img/bird-food.jpg', '/img/index_img/bird-accessories.jpg', '/img/index_img/bird-grooming.jpg'];
var smallAnimalsImages=['/img/index_img/rabbit.jpg','/img/index_img/hamster.webp','/img/index_img/iguana.jpg'];
var dropUl = document.getElementsByClassName('drop-ul');
var dogCategoriesImg = document.getElementById('dogCategoriesPic');
var catCategoriesImg = document.getElementById('catCategoriesPic');
var fishCategoriesImg = document.getElementById('fishCategoriesPic');
var birdCategoriesImg = document.getElementById('birdCategoriesPic');
var smallAnimalsCategoriesImg=document.getElementById('smallAnimalsCategoriesPic');
// var ulHeader = document.querySelectorAll(".drop-ul > li:first-child")
var picHeader = document.querySelectorAll('.li-header');
var sublists = document.querySelectorAll('.drop-ul > li');


/******* 1st NAVBAR EFFECT **********/
window.onscroll = function () {
  if (window.pageYOffset > 150) {
    // nav.style.background =  "transparent";
    nav.style.background = 'rgba(255, 249, 192, 0.7)';
    // nav.style.height = '3rem';
    list.forEach(element => {
      element.style.color = 'green';
    });

  } else {
    nav.style.background = 'green';
    // nav.style.height = '6.9rem';
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
      fishCategoriesImg.src = fishNavImages[0];
      break;
    case dropUl[9]:
      fishCategoriesImg.src = fishNavImages[1];
      break;
    case dropUl[10]:
      fishCategoriesImg.src = fishNavImages[2];
      break;
    case dropUl[11]:
      fishCategoriesImg.src = fishNavImages[3];
      break;
    case dropUl[12]:
      birdCategoriesImg.src = birdNavImages[0];
      break;
    case dropUl[13]:
      birdCategoriesImg.src = birdNavImages[1];
      break;
    case dropUl[14]:
      birdCategoriesImg.src = birdNavImages[2];
      break;
    case dropUl[15]:
      smallAnimalsCategoriesImg.src = smallAnimalsImages[0];
      break;
    case dropUl[16]:
      smallAnimalsCategoriesImg.src = smallAnimalsImages[1];
      break;
    case dropUl[17]:
      smallAnimalsCategoriesImg.src = smallAnimalsImages[2];
      break;
  }
}


sublists.forEach((list) => {
  list.addEventListener('mouseenter', slides);
});



//*********SIDE CART*********/

const sideCart = document.querySelector('.productsOnCart');
const navCart =document.querySelector('.shoppingCartButton');
const closeBtn=document.getElementById('closeButton');
// console.log(sideCart.style.width)

function toggleSideCart() {
  if(sideCart.style.width === '0px'){

    sideCart.style.width ='400px';}
  else{
    sideCart.style.width='0px';
  }
}


navCart.addEventListener('click',toggleSideCart);

let closeSideCart=()=>{
  sideCart.style.width='0px';
};


closeBtn.addEventListener('click',closeSideCart);

//SIDE CART ADD TO THE LOCAL STORAGE

let addToCartBtn=document.getElementsByClassName('addtocart');
console.log(addToCartBtn);
let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if(!productsInCart){
  productsInCart = [];
}
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('#sum-prices');
const products = document.querySelectorAll('.cartbox');
console.log(cartSumPrice.innerHTML);


const countTheSumPrice = function () { // 4
  let sum = 0;
  productsInCart.forEach(item => {
    sum += item.price;
  });
  return sum;
};

const updateShoppingCartHTML = function () {  // 3
  localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
  if (productsInCart.length > 0) {
    let result = productsInCart.map(product => {
      return `
				<li class="buyItem">
					<img class="sideCartImg" src="${product.image}">
					<div class="mainBodySideCart">
						<h5 class="sideCartName">${product.name}</h5>
						<h6>€ ${product.price}</h6>
						<div class="sideCartBtns">
							<button class="button-minus sideCountBtn" data-id=${product.id}>-</button>
							<span class="countOfProduct">${product.count}</span>
							<button class="button-plus sideCountBtn" data-id=${product.id}>+</button>
						</div>
					</div>
				</li>`;
    });
    parentElement.innerHTML = result.join('');
    document.querySelector('.checkout').classList.remove('hidden');
    cartSumPrice.innerHTML = '$' + countTheSumPrice();

  }
  else {
    document.querySelector('.checkout').classList.add('hidden');
    parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
    cartSumPrice.innerHTML = '';
  }
};

function updateProductsInCart(product) { // 2
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id === product.id) {
      productsInCart[i].count += 1;
      productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
      return;
    }
  }
  productsInCart.push(product);
}

products.forEach(item => {   // 1
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('addtocart')) {
      const productID = e.target.dataset.productId;
      const productName = item.querySelector('.productName').innerHTML;
      const productPrice = item.querySelector('.price').innerHTML;
      const productImage = item.querySelector('img').src;
      let product = {
        name: productName,
        image: productImage,
        id: productID,
        count: 1,
        price: +productPrice,
        basePrice: +productPrice,
      };
      updateProductsInCart(product);
      updateShoppingCartHTML();
    }
  });
});

parentElement.addEventListener('click', (e) => { // Last
  const isPlusButton = e.target.classList.contains('button-plus');
  const isMinusButton = e.target.classList.contains('button-minus');
  if (isPlusButton || isMinusButton) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id == e.target.dataset.id) {
        if (isPlusButton) {
          productsInCart[i].count += 1;
        }
        else if (isMinusButton) {
          productsInCart[i].count -= 1;
        }
        productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;

      }
      if (productsInCart[i].count <= 0) {
        productsInCart.splice(i, 1);
      }
    }
    updateShoppingCartHTML();
  }
});

updateShoppingCartHTML();




//toast pop up
$(document).ready(() => {
  $('.addtocart').click(() => {
    toastr.success('The product added to cart');
  });
});





// localStorage.clear();
