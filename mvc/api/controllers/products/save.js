module.exports = {
    inputs: {
        name: { type: 'string', required: true },
        description: { type: 'string', required: true },
        costPrice: { type: 'number', required: true },
        quantity: { type: 'number', required: true },
    },

    fn: async function (inputs) {
        await Product.create({
            name: inputs.name,
            description: inputs.description,
            costPrice: inputs.costPrice,
            quantity: inputs.quantity,
        })
        this.res.redirect('/products')
    }
}