module.exports={
    inputs:{},


    exits:{
        success :{viewTemplatePath:'pages/fish/food'}
    },
    fn:async function(){
        let fishfood=await Pet_product.find({product_category_id:3})
        return {fishfood}
    }
}