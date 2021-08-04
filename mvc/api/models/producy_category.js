module.exports = {
    tableName: 'product_category',
    attribute: {
        name: { type: 'string', required: true },
        description: { type: 'string', required: true },
        pet_related: { type: 'number', required: true},
    },

    product: {
        collection: 'product',
        via:        'product_category'
    }
}