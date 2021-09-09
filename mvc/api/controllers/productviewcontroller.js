module.exports={
    inputs:{
        id:{
            type:'number',
            required:true
            
        }
    },
    fn:async function({id}){
        let product=await Pet_product.findOne({id:id}).populate("product_category_id")
        let subproduct=await Pet_product.findOne({id:id}).populate("subcategory_id")
        let pet=await Pet_product.findOne({id:id}).populate("pet_id")
        
         console.log(subproduct);
        return this.res.view('pages/productview',{product,subproduct,pet})
    },
    
}