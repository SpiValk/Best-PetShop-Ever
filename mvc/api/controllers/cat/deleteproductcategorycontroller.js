module.exports = {
    inputs: {
        id: { type: 'number'},

    },
    fn: async function(inputs) {
        if(await Pet_product.findOne(inputs.id)) {
            await Pet_product.destroy(inputs.id)
            this.res.redirect('/') 
        } else { 
            var result = `No product with id: ${inputs.id}` 
            this.res.status(404)
            return this.res.view('pagesnotfound', {result})
        }
    },
}