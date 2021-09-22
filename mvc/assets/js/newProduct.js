/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
$(document).ready(() => {
  $('#pet').on('change',(e) => {
    e.preventDefault();
    $('#pet-category').html(''); //?
    //  $('#state').val('');
    var petValue = $('#pet').val();
    $.getJSON('/pets', (data) => {
      $('#pet-category').append(` <option value="" hidden selected> Choose your category </option>`);
      $.each(data, (key, value) => {
        if(value.id == petValue) {
          $.each(value.product_category_id, (key,value) =>{
            $('#pet-category').append(`<option value="${value.id}"> ${value.category_name} </option>`);
          });
        }
      });});});

  $('#pet-category').on('change',(e) => {
    e.preventDefault();
    $('#pet-subcategory').html('');
    var categId = $('#pet-category').val();
    $('#pet-subcategory').append(` <option value="" hidden selected> Choose your category </option>`);
    $.getJSON('/product_category', (data) => {
      $.each(data, (key, value) =>{
        if(value.id == categId){
          $.each(value.subcategory_id, (key,value)=>{
            $('#pet-subcategory').append(`<option value="${value.id}"> ${value.subcategory} </option>`);
          });
        }
      });

    });
  });

});
