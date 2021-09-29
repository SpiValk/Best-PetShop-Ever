
var Items = localStorage.getItem('shoppingCart');

let productsCartView = document.getElementById('display-product-in-cart-view');
let finalOrderPrice = document.getElementById('check-amt');
let removeProductBtns = document.getElementsByClassName('cart-product-remove');
let cartProductBox = document.getElementsByClassName('cartViewProduct');
let cartProductId = document.getElementsByClassName('id');
let quantityNumbers=document.getElementsByClassName('quanNumber');
let quantityButtons=document.getElementsByClassName('quantity-btns');
console.log(quantityButtons);


var pull = JSON.parse(Items);
if(!pull){
  pull=[];
}
const countSumPrice1 = function () { // 4
  let sum = 0;
  pull.forEach(item => {
    sum += item.price;
  });
  console.log(sum);
  return sum;
};

function changeObjCount(shoppingCart,obj){
  var newObj=JSON.parse(localstorage.getItem(shoppingCart));
  for (var k in obj){
    newObj[k]=obj[k];
    return newObj;
  }
}


function displayCartProducts(){
  localStorage.setItem('shoppingCart', JSON.stringify(pull));
  console.log(pull);
  if (pull.length > 0) {
    let result = pull.map(carprod => {

      return ` <div class="row d-flex justify-content-center border-top cartViewProduct">         
        <div class="col-5">
            <div class="row d-flex">
                <div class="book"> <img src="${carprod.image}" class="book-img"> </div>
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">${carprod.name}</h6>
                </div>
            </div>
        </div>
        <div class="my-auto col-7">
            <div class="row text-right">
                
                <div class="col-4">
                    <div class="quantity-btns col d-flex justify-content-start px-3">
                       <button class="button-plus quantity-btn" data-id=${carprod.id}>+</button> <span class="px-sm-1 quanNumber">${carprod.count}</span> <button class="button-minus quantity-btn" data-id=${carprod.id}>-</button> 
                    </div>
                </div>
                <div class="col-4">
                    <h6 class="mob-text">€ ${carprod.price}</h6>
                </div>
                <div class="col-4">
                    <button class="btn btn-danger cart-product-remove" id="${carprod.id}">Remove</button>
                </div>
            </div>
        </div>
    </div> 
    `;});
    productsCartView.innerHTML = result.join(' ');
    finalOrderPrice.innerHTML = 'Checkout €' + countSumPrice1();
  }
  else {
    productsCartView.innerHTML = 'Your shopping cart is empty';
    finalOrderPrice.innerHTML = 'Checkout €0';
  }}


finalOrderPrice.innerHTML = 'Checkout €' + countSumPrice1();




// + - buttons work


function quantityOfProducts(e){
  const plusButton = e.target.classList.contains('button-plus');
  const minusButton = e.target.classList.contains('button-minus');
  console.log(plusButton+' tos sin koumpi');
  console.log(minusButton +'to plin koumpi');
  if (plusButton || minusButton) {
    for (let i = 0; i < pull.length; i++) {

      if (pull[i].id == e.target.dataset.id) {
        if (plusButton) {

          pull[i].count += 1;

          for(quanNumber of quantityButtons){
            console.log(quantityButtons);
            if(quanNumber.contains(e.target)){
              console.log(e.target);
              quanNumber.innerHTML=`<button class="button-plus quantity-btn" data-id=${e.target.dataset.id}>+</button> <span class="px-sm-1 quanNumber">${pull[i].count}</span> <button class="button-minus quantity-btn" data-id=${e.target.dataset.id}>-</button> `;
            }
          }


        }
        else if (minusButton) {
          pull[i].count -= 1;
          for(quanNumber of quantityButtons){
            if(quanNumber.contains(e.target)){
              if(pull[i].count<=0){
                removeElement(e);
              }else{
                // console.log(e.target)
                quanNumber.innerHTML=`<button class="button-plus quantity-btn" data-id=${e.target.dataset.id}>+</button> <span class="px-sm-1 quanNumber">${pull[i].count}</span> <button class="button-minus quantity-btn" data-id=${e.target.dataset.id}>-</button> `;}

            }}
        }

        pull[i].price = pull[i].basePrice * pull[i].count;
        console.log(pull[i].price);

      }
      if (pull[i].count <= 0) {
        removeElement(e);
        pull.splice(i, 1);
        console.log(pull[i]);

      }



    }

    localStorage.setItem('shoppingCart', JSON.stringify(pull));
    for (cu in pull){
      console.log(pull[cu].count);
    }

    //   if (pull.length > 0) {
    //     let result= pull.map(carprod => {console.log(carprod.name)
    //       return  ` <div class="row d-flex justify-content-center border-top cartViewProduct">
    //         <div class="col-5">
    //             <div class="row d-flex">
    //                 <div class="book"> <img src="${carprod.image}" class="book-img"> </div>
    //                 <div class="my-auto flex-column d-flex pad-left">
    //                     <h6 class="mob-text">${carprod.name}</h6>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="my-auto col-7">
    //             <div class="row text-right">

    //                 <div class="col-4">
    //                     <div class="quantity-btns col d-flex justify-content-start px-3">
    //                        <button class="button-plus quantity-btn" data-id=${carprod.id}>+</button> <span class="px-sm-1 quanNumber">${carprod.count}</span> <button class="button-minus quantity-btn" data-id=${carprod.id}>-</button>
    //                     </div>
    //                 </div>
    //                 <div class="col-4">
    //                     <h6 class="mob-text">€${carprod.price}</h6>
    //                 </div>
    //                 <div class="col-4">
    //                     <button class="btn btn-danger cart-product-remove" id="${carprod.id}">Remove</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     `} )
    //     productsCartView.innerHTML=result
    //     finalOrderPrice.innerHTML = "Checkout €" + countSumPrice1()
    //     location.reload()

    // }}}



    if (productsInCart.length > 0) {
      let result = pull.map(product => {
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
      document.querySelector('.checkout').classList.remove('hidden');//den leitourgei des argotera an leipei i klassi
      cartSumPrice.innerHTML = '€' + countSumPrice1();

    }
    else {
      document.querySelector('.checkout').classList.add('hidden');
      parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
      cartSumPrice.innerHTML = '';
    }

  }
  // displayCartProducts()
  // location.reload()
}
displayCartProducts();

for (let button of quantityButtons){
  button.addEventListener('click',quantityOfProducts);}


//REMOVE ELEMENTS FROM CART VIEW

function localremove(e) {


  for (let i = 0; i < pull.length; i++) {
    if (pull[i].id == e.target.id) {
      pull.splice(i, 1);
    }


    localStorage.setItem('shoppingCart', JSON.stringify(pull));

    if (pull.length > 0) {
      let result = pull.map(product => {
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
      cartSumPrice.innerHTML = '€' + countSumPrice1().toFixed(2);

    }
    else {
      document.querySelector('.checkout').classList.add('hidden');
      parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
      cartSumPrice.innerHTML = '';
    }

  }
}



function removeElement(event) {
  for (let box of cartProductBox) {
    if (box.contains(event.target)) {
      localremove(event);
      box.remove();

    }
  }
}

for (let btn of removeProductBtns) {
  btn.addEventListener('click', removeElement);
}




//  function localremove(e){
//     // let pullProducts=[]
//         // console.log(event.target.id)

//     let pullProducts=pull.filter(product=>product.id!==e.target.id)

//     console.log(pullProducts)
//     localStorage.setItem('shoppingCart', JSON.stringify(pullProducts))
//     // console.log( localStorage.getItem('shoppingCart'))
//             if (pullProducts.length > 0) {

//               let result = pullProducts.map(product => {
//                 //   console.log(product)
//                 return `
//                           <li class="buyItem">
//                               <img class="sideCartImg" src="${product.image}">
//                               <div class="mainBodySideCart">
//                                   <h5 class="sideCartName">${product.name}</h5>
//                                   <h6>€ ${product.price}</h6>
//                                   <div class="sideCartBtns">
//                                       <button class="button-minus sideCountBtn" data-id=${product.id}>-</button>
//                                       <span class="countOfProduct">${product.count}</span>
//                                       <button class="button-plus sideCountBtn" data-id=${product.id}>+</button>
//                                   </div>
//                               </div>
//                           </li>`;
//               });
//               parentElement.innerHTML = result.join('');
//               console.log(parentElement)
//               document.querySelector('.checkout').classList.remove('hidden');
//               cartSumPrice.innerHTML = '$' + countSumPrice1();

//             }
//             else {
//               document.querySelector('.checkout').classList.add('hidden');
//               parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
//               cartSumPrice.innerHTML = '';
//             }}


// console.log(pullProducts)
// console.log(pull)}




// function removeElement(event){
//     for(let box of cartProductBox){
//                 if(box.contains(event.target)){
//                     box.remove()


//                 }}

//                 // let storageProducts = JSON.parse(localStorage.getItem('products'));
//                 let products = pull.filter(product => product.productId !== productId );
//                 localStorage.setItem('products', JSON.stringify(products));
//             }

// }










let poutsesMple = 'poutse mple kai fuck you bird';
$(() => {
  console.log($('#checkoutBtn'));
  $('#checkoutBtn').click(() => {
    console.log('fuck you bird'),
    $.ajax({
      type: 'POST',
      url: 'http://localhost:1337/checkout',
      data: poutsesMple,
      success: function (data) {
        alert('congratulations');
      }

    });
  });
});


// fetch(`http://localhost:5000/api/users/`, {
//                 method: 'POST',
//                 headers,
//                 body: JSON.stringify({ user: user._id, ...newData }),
//               })
//                 .then((resp) => resp.json())
//                 .then((resp) => getUsers());
//               resolve();









