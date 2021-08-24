module.exports={
    tableName:'product_subcategory',
    attributes:{
      subcategory :{type:'string', columnName: 'subcategory', required:true},
  
    

      pet_product_id: {
        collection : 'pet_product',
        via        : 'subcategory_id'
      }

      
    }};
  