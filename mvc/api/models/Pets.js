module.exports={
  tableName:'pets',

  attributes:{
    name          :{type:'string', columnName: 'name',        required:true},
    description   :{type:'string', columnName: 'description', required:true},


    pet_product_id:{
      collection: 'pet_product',
      via: 'pet_id'
    },

    product_category_id: {
      collection: 'product_category',
      via:        'pets_id'
    },
  }};
