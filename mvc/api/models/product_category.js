module.exports = {
    tableName: 'product_category',
    attributes: {
        category_name   : { type: 'string', columnName: 'category_name', required: true },
        description     : { type: 'string', columnName: 'description',   required: true },


    pet_product:{
        model:'pet_product'
    },

    pets: {
        collection: 'pets',
        via:        'product_category'
    },
    }
}