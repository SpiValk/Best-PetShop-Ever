module.exports={
  tableName:'product_subcategory',
  attributes:{
    subcategory :{type:'string', columnName: 'subcategory', required:true},

    category_id:{
      model:'product_category'
    },

    pet_product_id: {
      collection : 'pet_product',
      via        : 'subcategory_id'
    }


  }};
