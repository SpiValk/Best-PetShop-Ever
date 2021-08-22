module.exports={
    tableName:"pets",
    attributes:{
       name          :{type:'string', columnName: 'name',        required:true},
       description   :{type:'string', columnName: 'description', required:true},
    //    pet_image     :{type:'blob',   columnName: 'pet_image',   required:true},
            


            product_category: {
                model: 'product_category'
            }
}}