module.exports = {
    tableName: 'products',
    attribute: {
        name: { type: 'string', required: true },
        description: { type: 'string', required: true },
        costPrice: { type: 'number', required: true},
        quantity: { type: 'number', required: true},
    }
}