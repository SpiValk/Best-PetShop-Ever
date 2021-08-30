var nav = document.getElementById('navbar');
var list = nav.querySelectorAll('a');
var display = document.querySelector(".ul-image-box")
var dogCategoriesImg=document.getElementById("dogCategoriesPic")
var dogImages = [ "img/pet-shop-veterinary-with-food-animals-vector.jpg","img/199709573426d727965f5e814c7b9c95.jpg",'img/Double-Pet-Bowls-Dog-Food-Water-Feeder-Stainless-Steel-Pet-Drinking-Dish-Feeder-Cat-Puppy-Feeding.jpg_Q90.jpg_.webp','img/a7e48fe4d2898693bc984aaa937f3bb4.png']
var dogDropUl = document.getElementsByClassName("drop-ul")
var ulHeader=document.querySelectorAll(".drop-ul > li:first-child")
var dogPicHeader=document.querySelector("#dog-li-header")
var dogSublists=document.querySelectorAll(".drop-ul > li")



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
   
        // let subHeader=ulHeader[i].innerText
        
        // return subHeader
    
    // console.log(subHeader)

    let slideShow = event.target.innerText
    dogPicHeader.textContent=slideShow
    switch (slideShow) {
        case 'FOODS':
            dogCategoriesImg.src = dogImages[0]
            
            break;

        case 'DOG GROOMING':
            dogCategoriesImg.src = dogImages[1]
            break;
        case 'DOG ACCESSORIES':
            dogCategoriesImg.src = dogImages[2]
            break;
        case 'VETERINARY PRODUCTS':
            dogCategoriesImg.src = dogImages[3]
            break;

    }
}






for (let i=0;i<ulHeader.length;i++) {
    ulHeader[i].addEventListener("mouseenter", slides)
    // dogDropUl[i].addEventListener("mouseenter",slides)
   
}


for (let j in dogSublists){
    dogSublists[j].addEventListener("mouseenter",slides)
}
// dogDropUl.forEach((ul)=>{
//     ul.addEventListener("mouseenter",()=>{
//         if(ulHeader.innerText=="FOODS"){
//             dogCategoriesImg.src = dogImages[0]
//         }

//     })
// })
