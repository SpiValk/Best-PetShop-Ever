module.exports={
    // inputs:{
    //     id:{
    //         type:"number",
    //         required:true
    //     }

    // },
    fn:async function(){
        let product=await Pet_product.find().populate("product_category_id")
        let subproduct=await Pet_product.find().populate("subcategory_id")

        
        return this.res.view('pages/addtocart',{product,subproduct})
    }
}