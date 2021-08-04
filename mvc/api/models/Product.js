module.exports = {
    tableName: 'products',
    attribute: {
        name: { type: 'string', required: true },
        description: { type: 'string', required: true },
        costPrice: { type: 'number', required: true},
        quantity: { type: 'number', required: true},
    },

    product_category: {
        model: 'product_category'
    },
    product_supplier:{
        model:'Supplier'
    },
    product_discount:{
        model:'discount'
    }
}