
var Items = localStorage.getItem('shoppingCart');
console.log(Items);
// var checkoutBtn=document.getElementById("checkout")
// console.log(Itemonly)
// console.log(typeof Itemonly)
let productsCartView = document.getElementById('display-product-in-cart-view');
let finalOrderPrice = document.getElementById('check-amt');
let removeProductBtns = document.getElementsByClassName('cart-product-remove');
let cartProductBox = document.getElementsByClassName('cartViewProduct');
let cartProductId = document.getElementsByClassName('id');
// let parentElement = document.querySelector('#buyItems');
// let cartSumPrice = document.querySelector('#sum-prices');
// console.log(cartSumPrice1)
// console.log(parentElement1)
// console.log(cartProductId)
// console.log(typeof cartProductId)
// console.log(cartProductId.length)
// setTimeout(function(){ console.log(cartProductId.length) }, 0);
// console.log(Object.keys(cartProductId))

var pull = JSON.parse(Items);
const countSumPrice1 = function () { // 4
  let sum = 0;
  pull.forEach(item => {
    sum += item.price;
  });
  return sum;
};




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
                    <div class="col d-flex justify-content-start px-3">
                       <button class="quantity-btn">+</button> <span class="px-sm-1 quanNumber">${carprod.count}</span> <button class="quantity-btn">-</button> 
                    </div>
                </div>
                <div class="col-4">
                    <h6 class="mob-text">€${carprod.price}</h6>
                </div>
                <div class="col-4">
                    <button class="btn btn-danger cart-product-remove" id="${carprod.id}">Remove</button>
                </div>
            </div>
        </div>
    </div>  
    `;
  }
  );
  productsCartView.innerHTML = result;
}
else {
  productsCartView.innerHTML = 'Your shopping cart is empty';
}



finalOrderPrice.innerHTML = 'Checkout €' + countSumPrice1();


// <p hidden><span class="id">${carprod.id}</span></p>


//REMOVE ELEMENTS FROM CART VIEW

function localremove(e) {


  for (let i = 0; i < pull.length; i++) {


    if (pull[i].id == e.target.id) {
      // setTimeout(function(){console.log(pull[i].id)},0)

      pull.splice(i, 1);
      console.log(pull);

    }

    //   console.log(newPull)

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
      cartSumPrice.innerHTML = '€' + countSumPrice1();

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









