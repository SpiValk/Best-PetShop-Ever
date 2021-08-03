module.exports = {
    inputs: {
        id: { type: 'number' },
    },

    fn: async function(inputs) {
        if(await Product.findOne(inputs.id)) {
            await Product.destroy(inputs.id)
            this.res.redirect('/products')
        } else {
            var result = `Product with id: ${inputs.id} was not found.` 
            this.res.status(404)
            return this.res.view('pages/products/notfound', {result})
        }
    }
}