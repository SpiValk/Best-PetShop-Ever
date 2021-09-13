
//ZOOM PICTURE EFFECT//


var zoomArea=document.getElementsByClassName("zoomArea")[0]
var zoomImg=document.getElementById("zoomImg")


zoomArea.addEventListener("mousemove",function(event){
	clientX = event.clientX - zoomArea.offsetLeft
	clientY = event.clientY - zoomArea.offsetTop
	 
	var mWidth = zoomArea.offsetWidth
	var mHeight = zoomArea.offsetHeight
	clientX = clientX / mWidth * 100
	clientY = clientY / mHeight * 100

	//magnifying_img.style.transform = 'translate(-50%,-50%) scale(2)'
	zoomImg.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2)'
})

zoomArea.addEventListener("mouseleave",function(){
	zoomImg.style.transform = 'translate(-50%,-50%) scale(1)'
})


//QUANTITY BUTTONS 
var quantityBtns=document.getElementsByClassName("quantity-button")
var addBtn=document.getElementsByClassName("quantity-button")[0];
var minBtn=document.getElementsByClassName("quantity-button")[1];
var quantityNum=document.getElementById("quantity-number");
var num=1
// console.log(quantityNum.innerHTML++)
plus=(event)=>{
    num++
    quantityNum.innerHTML=num
    event.preventDefault()
}



 addBtn.addEventListener("click",plus)

minus=(event)=>{
    num--
    if(num<=0){
        num=1
    }
    quantityNum.innerHTML=num;
    event.preventDefault();

}





 minBtn.addEventListener("click",minus)






