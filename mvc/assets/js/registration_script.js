let popUpContainer = document.getElementById('modal-bg');


window.onload = function(){
  setTimeout(() => {
    popUpContainer.classList.add('bg-active');
  }, 1000);
};
document.getElementById('xbuttton').addEventListener('click', () => {
  document.querySelector('.mainPopUpSection').style.display = 'none';
  popUpContainer.classList.remove('bg-active');
});


const keyDownHandler = (e) => {
  if(e.key === 'Escape' && document.querySelector('.mainPopUpSection')){
    document.querySelector('.mainPopUpSection').style.display = 'none';
    popUpContainer.classList.remove('bg-active');
    document.body.removeEventListener('keydown', keyDownHandler);
  }
};

document.body.addEventListener('keydown', keyDownHandler );
