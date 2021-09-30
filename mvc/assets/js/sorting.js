// //VARIABLES

var slider = document.getElementById("myRange");
let selector = document.querySelector(".arrange")
var output = document.getElementById("rangeResult");
let items_list = document.getElementById("item-list")
let searchFilter = document.getElementById("search-button")
// console.log(searchFilter)
let li = Array.from(items_list.children);
// console.log(li)
var radioStatus = document.getElementsByName("status")



//PRICE RANGE SLIDERS
// Display the default slider value
output.innerHTML = slider.value; 

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}

// //FILTERING PRODUCTS

// //*****1ST ATTEMPT****** */

// // //filter by status
// // let statusFilter=(arr)=>{
// //     for (radio in radioStatus) {
// //         // console.log(radioStatus[radio])
// //         if (radioStatus[radio].checked) {
// //             for (list of li) {
// //                 if (list.dataset.status == radioStatus[radio].value) {
// //                     arr.push(list)
// //                 }
// //             }
// //         }
// //     }
// //     console.log(`after status filter ${arr}`)
// //     return arr

// //     }





// // //filter by price
// // rangePriceFilter=(arr)=>{
// //     console.log(`begins range filter ${arr}`)
// //   let sortedPriceArr=[]
// //     console.log(arr.length)
// //     // console.log(typeof arr)
// //     console.log(li.length)

// //     // let newSorted=arr.filter(list=>list.dataset.price>=output.value)
// //     // console.log(newSorted.length)
// //     for (list of arr){
// //            console.log(list.dataset.price)
// //         if(list.dataset.price>=slider.value){
// //             sortedPriceArr.push(list)
// //         }
// //     }

// //     console.log(sortedPriceArr)
// //     return sortedPriceArr



// //     //   arr.forEach((list)=>{
// //     //    console.log(output.innerHTML)
// //     //    console.log(list.dataset.price)
// //     //    console.log(list.dataset.price >= output.value)
// //     // if (list.dataset.price >= output.innerHTML) {
// //     //     console.log(list.dataset.price >= output.value)
// //     //     sortedPriceArr.push(list)
// //     //         // console.log(arr.length)
// //     // }
// //     // console.log(sortedPriceArr)

// // // })


// // }



// // // }

// // let filteringProducts=()=>{
// //         let filterArr = [] 
// //         statusFilter(filterArr)
// //         console.log(filterArr)
// //         rangePriceFilter(filterArr)
// // //     // categoryFilter()


// // let result=filterArr.map((product)=>{
// //             return product.outerHTML


// //         })
// //         items_list.innerHTML=result.join(" ")}


// //******************************************************** */


let filteringProducts = () => {

    let filterArr=[]
    // //filter by status
    
   
    for (radio in radioStatus) {
        // if(!radioStatus[radio].checked){
        //     return items_list
        // }
        if (radioStatus[radio].checked) {
            for (list of li) {
                console.log(list.dataset.status)
                console.log(radioStatus[radio].value)
                console.log(typeof list.dataset.status)
                console.log(typeof radioStatus[radio].value)
                console.log(list.dataset.status == radioStatus[radio].value)

                if (list.dataset.status == radioStatus[radio].value) {
                    filterArr.push(list)
                }
            }
        }
    }

    //filter by value
    let sortedPriceArr=[]
    if(filterArr.length>0){
        
        filterArr.forEach((list)=>{
            if (parseFloat(list.dataset.price) <= parseInt(slider.value)) {
                        sortedPriceArr.push(list)//1
                       
                    }
                    // console.log(sortedPriceArr)
        })
  }else{
      li.forEach((list)=>{
          if(parseFloat(list.dataset.price)<=parseInt(slider.value)){
              sortedPriceArr.push(list)//2
            
          }
      })
    //   console.log(sortedPriceArr)
  }
    let filterResult=sortedPriceArr.map((product)=>{
                    return product.outerHTML
        
                })
                items_list.innerHTML=filterResult.join("")
                // selector.value="default"
                return filterResult
   
                }

            //   for (data in filteringProducts()){
            //      console.log(filteringProducts())
            //   }
      




searchFilter.addEventListener("click", filteringProducts)





// //Get the prices
let prodPriceList = [];
let prodPrice = document.getElementsByClassName("retail-price");









let options = [];
for (let opt of selector) {
    options.push(opt.value)

}





//Sort methods
//ASC
let sortAsc = function () {
    prodPriceListAsc = []
    // console.log(filteringProducts())
    // console.log(filteringProducts().length>0)
    // if(filteringProducts().length>0){
    //     prodPriceListAsc=filteringProducts()
    //     prodPriceListAsc.sort((a, b) => a.dataset.price - b.dataset.price)
    // }
    // else{
   

    prodPriceListAsc = li.sort((a, b) => a.dataset.price - b.dataset.price)
    console.log(prodPriceListAsc)
    let ascArr=prodPriceListAsc.map(prod=>prod.outerHTML)
    return ascArr
    }
   


//DESC
let sortDesc = function () {
    // console.log("testing")
    // console.log(li)
    prodPriceListDesc = []
    prodPriceListDesc = li.sort((a, b) => b.dataset.price - a.dataset.price)
    // items_list.children=prodPriceListDesc
    // console.log(items_list.children)
    // for (pr of prodPriceListDesc) {
    //     console.log(pr.dataset.price)
    //     prodPriceListDesc.innerHTML
        // return prodPriceListDesc
        let descArr=prodPriceListAsc.map(prod=>prod.outerHTML)
        return descArr
    }


dateAsc = () => {
    prodDateListAsc = [];
    prodDateListAsc = li.sort((a, b) => a.dataset.date - b.dataset.date)
    // for (pr of prodDateListAsc) {
       
    //     prodPriceListAsc.innerHTML
    // }

    let dateAscArr=prodDateListAsc.map(prod=>prod.outerHTML)
    return dateAscArr




}
dateDesc = () => {
    prodDateListDesc = []
    prodDateListDesc = li.sort((a, b) => b.dataset.date - a.dataset.date)
    // for (pr of prodDateListDesc) {
    //     //     console.log(pr.dataset.date)
    //     // console.log(prodDateListDesc)
    //     prodDateListDesc.innerHTML
    // }
    let dateDescArr= prodDateListDesc.map(prod=>prod.outerHTML)
    return dateDescArr
    


}



orderBy = () => {
    console.log("testing")
    console.log(selector.value)
    switch (selector.value) {
        case 'default':
            location.reload()
            console.log("testing")
            // code block
            break;
        case 'price-asc':
            sortAsc()
            // console.log("testing")
            // let result1= prodPriceListAsc.map((product)=>{
            //     return product.outerHTML
            // })
            // items_list.innerHTML=result1
            items_list.innerHTML=sortAsc().join(" ")
            break;
        case 'price-desc':
            
            sortDesc()
            // let result2=prodPriceListDesc.map((product)=>{
            //     return product.outerHTML
            // })
            // items_list.innerHTML=result2
            items_list.innerHTML=sortDesc().join(" ")
            break;
        case "date-asc":
            dateAsc()

            // items_list.append(...prodDateListAsc)
            // let result3=prodPriceListDesc.map((product)=>{
            //     return product.outerHTML})
            // items_list.innerHTML=result3
            items_list.innerHTML=dateAsc().join(" ")

            break;
        case "date-desc":
            dateDesc()

            items_list.innerHTML=dateDesc().join("")
        //    console.log(items_list.length)
        //     items_list.append(...prodDateListDesc)
            break;

    }
}

selector.addEventListener('change', orderBy)


