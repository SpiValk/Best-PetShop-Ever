module.exports={
  tableName: 'order_products',
  attributes:{
    order_id   : { model:'order' },
    product_id    : { model:'pet_product' },
    quantity   : { type:'number',   columnName:'quantity', required:true },
    current_product_price : {type:'number', required:true}
  }};
