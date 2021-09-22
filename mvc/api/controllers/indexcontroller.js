module.exports = {
    input: {

    },
    fn: async function () {
        var totalSum = await Pet_product.count()
        // console.log(totalSum)

        var AllIndexProducts = []
        for (var i = 0; i < 12; ++i) {
            newProductArrival = Math.floor(Math.random() * totalSum)+1
            AllIndexProducts.push(await Pet_product.findOne(newProductArrival))
            var newArrivals = AllIndexProducts.slice(0, 4)
            var featuredSales = AllIndexProducts.slice(4, 8)
            var bestSellers = AllIndexProducts.slice(8, 12)
        }
        const categs = await sails.helpers.getCategories();
        // const category = categs[inputs.category - 1][inputs.category];

        const allPets = await sails.helpers.getPets();
        // const pet = allPets[inputs.pet - 1][inputs.pet];

        const subCategs = await sails.helpers.getSubcategories();
        // const subCategory = subCategs[inputs.subcategory - 1][inputs.subcategory];
        this.res.view('pages/index', { newArrivals, featuredSales, bestSellers,categs,allPets,subCategs })
    }
}