module.exports={
    input:{

    },
    fn:function(){
        var totalSum= pet_product.count()
        console.log(totalSum)
        this.res.view('pages/index')
    }
}