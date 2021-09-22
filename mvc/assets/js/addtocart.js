
var Itemonly = localStorage.getItem('shoppingCart');
// console.log(localStorageItems)
// console.log(typeof Itemonly)
let productsCartView = document.getElementById("display-product-in-cart-view")
let finalOrderPrice=document.getElementById("check-amt")


var pull = JSON.parse(Itemonly)
const countSumPrice = function () { // 4
    let sum = 0;
    pull.forEach(item => {
      sum += item.price;
    });
    return sum;
  };




console.log(pull)
if (pull.length > 0) {
    let result = pull.map(carprod => {
        return ` <div class="row d-flex justify-content-center border-top">
                   
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
                    <p class="mob-text">Digital</p>
                </div>
                <div class="col-4">
                    <div class="row d-flex justify-content-end px-3">
                        <p class="mb-0" id="cnt1">${carprod.count}</p>
                        <div class="d-flex flex-column plus-minus"> <span class="vsm-text plus">+</span>
                            <span class="vsm-text minus">-</span>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <h6 class="mob-text">$${carprod.price}</h6>
                </div>
            </div>
        </div>
    </div>  
    `}
    )
    productsCartView.innerHTML = result
}
else{
    productsCartView.innerHTML="Your shopping cart is empty"
}



finalOrderPrice.innerHTML="Checkout $"+countSumPrice()


