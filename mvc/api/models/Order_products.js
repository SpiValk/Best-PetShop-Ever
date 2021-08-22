module.exports={
    tableName:'order_products',
    attributes:{
        order       :{model:'order'},
        pet_product    :{model:'pet_product'},
        quantity   :{type:'number',   columnName:'quantity',       required:true},
    
}}