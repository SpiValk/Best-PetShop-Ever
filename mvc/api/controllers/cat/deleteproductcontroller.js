module.exports = {
    inputs: {
        id: { type: 'number'},

    },
    fn: async function(inputs) {
        if(await Product_category.findOne(inputs.id)) {
            await Product_category.destroy(inputs.id)
            this.res.redirect('/') 
        } else { 
            var result = `No product with id: ${inputs.id}` 
            this.res.status(404)
            return this.res.view('pages/notfound', {result})
        }
    },
}