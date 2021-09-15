module.exports={
    

    inputs:{
        payload:{
            type:"json",
            required:true
        }
    },

    fn: async function({payload}){


        const regex=new RegExp('^'+payload+'.*','i')
        var search=await Pet_product.find({name:regex});
        //limit the search
        search=search.slice(0,10);
        return this.res.view('pages/index',{payload:search})



    }
}
