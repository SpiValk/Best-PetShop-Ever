// document.querySelector("button").addEventListener('click', function(e){
//     let success =  "Successful Registration!"
    
//     document.querySelector('section').style.textAlign = "center"
//     document.querySelector('section').style.fontSize = "3em"
//     document.querySelector('section').innerHTML = success
// })
let mainPage = document.querySelector("body")
let popUpContainer = document.getElementById("modal-bg")


window.onload = function(){
    setTimeout(() => {
        // mainPage.style.backgroundColor = "rgba(0,0,0, 0.5)"
        // popUpContainer.style.display = "block"
        // popUpContainer.style.zIndex = "999"
        popUpContainer.classList.add('bg-active');
    }, 2000);
}
document.getElementById("xbuttton").addEventListener('click', function(e){
    
    document.querySelector('.mainSection').style.display = 'none'
    popUpContainer.classList.remove('bg-active');
   
})
