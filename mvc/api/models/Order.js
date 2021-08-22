module.exports={
    tableName:'order',
    attributes:{
        order_date      :{type:'number',   columnName:'order_date',      required:true},
        order_status    :{type:'boolean',  columnName:'order_status',    required:true},
        shipping_date   :{type:'number',   columnName:'shipping_date',   required:true},
        total_amount    :{type:'number',   columnName:'float',           required:true},
        quantity        :{type:'number',   columnName:'quantity',        required:true},
    
        user: {
            collection: 'user',
            via:        'order'
        },

        product: {
            collection: 'pet_product',
            via:        'order_id',
            through:    'order_products'
        }
    
    }}