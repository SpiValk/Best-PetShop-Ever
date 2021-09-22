
//DECLARE VARIABLES

var nav = document.getElementById('navbar');
var list = nav.querySelectorAll('a');

var navImages = ['/img/index_img/pet-shop-veterinary-with-food-animals-vector.jpg', '/img/index_img/shampoo.jpg', '/img/index_img/Bowls.webp', '/img/index_img/PetsCare.png'];
var fishNavImages = ['/img/index_img/fish-food.jpg', '/img/index_img/aquarium.jpg', '/img/index_img/filter.webp', 'img/index_img/fish-care.jpg'];
var birdNavImages = ['/img/index_img/bird-food.jpg', '/img/index_img/bird-accessories.jpg', '/img/index_img/bird-grooming.jpg'];
var smallAnimalsImages = ['/img/index_img/rabbit.jpg', '/img/index_img/hamster.webp', '/img/index_img/iguana.jpg'];
var dropUl = document.getElementsByClassName('drop-ul');
var dogCategoriesImg = document.getElementById('dogCategoriesPic');
var catCategoriesImg = document.getElementById('catCategoriesPic');
var fishCategoriesImg = document.getElementById('fishCategoriesPic');
var birdCategoriesImg = document.getElementById('birdCategoriesPic');
var smallAnimalsCategoriesImg = document.getElementById('smallAnimalsCategoriesPic');
// var ulHeader = document.querySelectorAll(".drop-ul > li:first-child")
var picHeader = document.querySelectorAll('.li-header');
var sublists = document.querySelectorAll('.drop-ul > li');


/******* 1st NAVBAR EFFECT **********/
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    // nav.style.background =  "transparent";
    nav.style.background = 'rgba(255, 249, 192, 0.7)';
    // nav.style.height = '3rem';
    list.forEach(element => {

      element.style.color = 'rgb(30, 116, 48)';
    });

  } else {
    nav.style.background = 'rgb(30, 116, 48)';
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
const navCart = document.querySelector('.shoppingCartButton');
const closeBtn = document.getElementById('closeButton');
// console.log(sideCart.style.width)

function toggleSideCart() {
  if (sideCart.style.width == '0px') {
    sideCart.style.width = '400px';
  }
  else {
    sideCart.style.width = '0px';
  }
}


navCart.addEventListener('click', toggleSideCart);

let closeSideCart = () => {
  sideCart.style.width = '0px';
};


closeBtn.addEventListener('click', closeSideCart);

//SIDE CART ADD TO THE LOCAL STORAGE

let addToCartBtn = document.getElementsByClassName('addtocart');
let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if (!productsInCart) {
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
    if (productsInCart[i].id == product.id) {
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




//to clear the localstorage


// localStorage.clear()


///**********SEARCH BAR *************** */

// $(document).ready(() => {
//   // $.ajaxSetup({ cache: false });
//   $('#search').keyup(() => {
//     $('#result').html('');
//     //  $('#state').val('');
//     var searchField = $('#search').val();
//     // console.log(searchField);
//     if (searchField == '') { $('#result').html(''); } else {
//       var expression = new RegExp('^'+searchField+'.*',"i");;//('^'+searchField+'.*',"i");(searchField, "i")
//       $.getJSON('/pet_Product', (data) => {
//         $.each(data, (key, value0) => {
//           var hrefPetCateg=value0.pet_id.name
//           console.log(hrefPetCateg)
//           var subId=value0.subcategory_id.id
//           var hrefCateg=value0.product_category_id.category_name
//          console.log(hrefCateg)
//           var hrefSubCateg=value0.subcategory_id.subcategory
//           console.log(hrefSubCateg)
//           return{subId,hrefCateg,hrefPetCateg,hrefSubCateg}})
//           $.getJSON('/product_category',(data1)=>{
//             $.each(data1, (key, value) => {
//               $.each(value.pet_product_id, (key, value1) => {
//                 // console.log(value1.name)
//                 if(expression.test(value1.name) != false){
//                   // console.log(value1.name)
//                   console.log(value1.subcategory_id)
//                   console.log(subId)
//                   if (value1.subcategory_id == value0.subcategory_id.id) {

//                     $('#result').append(`<li class="nav-item link-class"><a href="/products/view/${value1.id}"><img src="/img/product_images/${hrefPetCateg}/${hrefCateg}/${hrefSubCateg}/${value1.image_name}" height="40px" width="40px" class="img-thumbnail" /> ${value1.name}</a></li>`);
//                   }

//                 }


//               })





//             })







//           })




//       })}


// $('#result').on('click', 'li', function () {
//   var click_text = $(this).text().split('|');
//   // console.log(click_text)
//   $('#search').val($.trim(click_text[0]));
//   $('#result').html('');
// });
// });})



//SECON CHOICE SORTING JSON FROM /PRODUCT CATEGORY FIRST

// $(document).ready(() => {
//   // $.ajaxSetup({ cache: false });
//   $('#search').keyup((event) => {

//     $('#result').html('');
//     //  $('#state').val('');
//     var searchField = $('#search').val();
//     if (searchField == '') { $('#result').html(''); } else {
//       var expression = new RegExp(searchField, "i");;//('^'+searchField+'.*',"i");
//       $.getJSON('/product_category', (data) => {
//         $.each(data, (key, value) => {
//           // console.log(value.pet_product_id.name)
//           // console.log(expression.test(value.name));
//           $.each(value.pet_product_id, (key, value1) => {
//             // console.log(value1.id)
//             if (expression.test(value1.name) != false) {
//               var valCateg=value1.product_category_id
//               // console.log(valCateg)
//               $.getJSON('/pet_Product', (data1) => {
//                 $.each(data1, (key, value2) => {
//                   // console.log(value1.subcategory_id == value2.subcategory_id.id)
//                   // console.log(value1.subcategory_id)
//                   // console.log(value2.subcategory_id.id)
//                   if (value2.product_category_id.id == valCateg) {
//                     // console.log(value2)

//                     $('#result').append(`<li class="nav-item link-class"><a href="/products/view/${value1.id}"><img src="/img/product_images/${value2.pet_id.name}/${value2.product_category_id.category_name}/${value2.subcategory_id.subcategory}/${value1.image_name}" height="40px" width="40px" class="img-thumbnail" /> ${value1.name}</a></li>`);
//                     // console.log(expression.test(value1.name))
//                   }
//                 })
//               })
//             }
//           })

//         });
//       });
//     }
//   });

//   $('#result').on('click', 'li', function () {
//     var click_text = $(this).text().split('|');
//     // console.log(click_text)
//     $('#search').val($.trim(click_text[0]));
//     $('#result').html('');
//   });
// });





//THE FIRST CHOICE FROM THE MAIN

// $(document).ready(() => {
//   // $.ajaxSetup({ cache: false });
//   $('#search').keyup(() => {
//     $('#result').html('');
//     //  $('#state').val('');
//     var searchField = $('#search').val();
//     console.log(searchField);
//     if(searchField==''){ $('#result').html('');}else{
//       var expression = new RegExp('^'+searchField+'.*',"i");;//('^'+searchField+'.*',"i");
//       $.getJSON('/pet_product', (data) => {
//         $.each(data, (key, value) => {
//           console.log(expression.test(value.name));
//           if (expression.test(value.name)!=false)
//           {
//             $('#result').append(`<li class="nav-item link-class"><a href="/products/view/${value.id}"><span hidden>${value.id} ${value.description} ${value.quantity} ${value.vendor_price} ${value.status} </span><img src="/img/product_images/${value.pet_id.name}/${value.product_category_id.category_name}/${value.subcategory_id.subcategory}/${value.image_name}" height="40px" width="40px" class="img-thumbnail" /> ${value.name}</a></li>`);

//           }
//         });
//       });
//     }});

//   $('#result').on('click', 'li', function() {
//     var click_text = $(this).text().split('|');
//     // console.log(click_text)
//     $('#search').val($.trim(click_text[0]));
//     $('#result').html('');
//   });
// });


// async function sendData(e){
//   const searchResults=document.getElementById("searchResults")
//   const searchBox=document.getElementById("search-box").value
//   await fetch('/pet_product',{
//     method:"POST",
//     headers:{'Accept': 'application/json; odata=verbose',
//              'Content-Type':'application/json'},
//     body:JSON.stringify({payload:e.value})
//   }).then(res=>res.text()).then(data=>{

//     let payload=data.payload;
//     searchResults.innerHTML="";
//     if(payload<1){
//       searchResults.innerHTML=`<p> Sorry.Nothing Found </p>`;
//       return
//     }
//     payload.forEach((item,index)=>{
// if(index>0) searchResults.innerHTML+='<hr>';
// searchResults.innerHTML+=`<p> ${item.name} </p>`

//     })
//     return;

//   })
// }



$(document).ready(() => {
  // $.ajaxSetup({ cache: false });
  $('#search').keyup((event) => {

    $('#result').html('');
    //  $('#state').val('');
    var searchField = $('#search').val();
    var url = "/product_category"

    if (searchField == '') { $('#result').html(''); } else{
      var expression = new RegExp('^'+searchField+'.*',"i");;//('^'+searchField+'.*',"i");searchField, "i"
      $.getJSON(url, (data) => {
        // console.log(data)
        // console.log("*******************data up value down*********************8888")
        var finalData = []
       $.each(data,(key,value)=>{
        // console.log(value)
          $.each(value.pet_product_id, (key, value1) => {
            // console.log(".....................................................................")
            // console.log(value1)
            if (expression.test(value1.name) ) {
              console.log("*********************************************sorted value1*****************")
              console.log(value1)

              $.each(value.subcategory_id,(key,value2)=>{
                if(value2.id==value1.subcategory_id){
                console.log(value2)
               

                finalData.push( prod={name:value1.name,petName:value.pets_id.name, imageName:value1.image_name,id:value1.id,catName:value.category_name,subCatName:value2.subcategory})
                  let uniqueFinalData=finalData.filter(function(item, pos){
                    return finalData.indexOf(item)== pos; 
                  });
                  console.log
                $.each(uniqueFinalData,(key,value3)=>{
               
                // for (prod in finalData){
                $('#result').append(`<li class="nav-item link-class"><a href="/products/view/${value3.id}"><img src="/img/product_images/${value3.petName}/${value3.catName}/${value3.subCatName}/${value3.imageName}" height="40px" width="40px" class="img-thumbnail" /> ${value3.name}</a></li>`)})}

                
              })  }
            })
          })
       
        })
        // $.getJSON(url1,(data)=>{
        //   $.each(data,(key,value)=>{
        //     // console.log(value.name)
        //     $.each(value.product_category_id,(key,value2)=>{
        //       // console.log(value2.category_name)

        //     })
        //   })
        // })
      }
      })
      // console.log(valCateg)


      // $('#result').on('click', 'li', function () {
      //   var click_text = $(this).text().split('|');
      //   // console.log(click_text)
      //   $('#search').val($.trim(click_text[0]));
      //   $('#result').html('');
      // });
    });
