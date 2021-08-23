module.exports={
  tableName: 'order_products',
  attributes:{
    order_id   : { model:'order' },
    product    : { model:'pet_product' },
    quantity   : { type:'number',   columnName:'quantity',       required:true },

  }};
