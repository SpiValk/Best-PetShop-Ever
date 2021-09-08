module.exports={
    inputs:{
        id:{
            type:'number',
            required:true
            
        }
    },
    fn:async function({id}){
        let product=await Pet_product.findOne({id:id})
        console.log(product.product_category_id.category_name);
        return this.res.view('pages/productview',{product})
    },
    
}