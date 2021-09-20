/* eslint-disable no-undef */
$(document).ready(() => {
  // $.ajaxSetup({ cache: false });
  $('#pet').on('change',() => {
    $('#pet-category').html(''); //?
    //  $('#state').val('');
    var petValue = $('#pet').val();
    // if(petValue===''){ $('#result').html('');}else{
    $.getJSON('/pets', (data) => {
      $.each(data, (key, value) => {
        if(value.id == petValue) {
          $.each(value.product_category_id, (key,value) =>{
            $('#pet-category').append(`<option value="${value.id}"> ${value.category_name} </option>`);
          });
        }

      });});});

});
