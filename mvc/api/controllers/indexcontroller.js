module.exports={
    

    inputs:{
        payload:{
            type:"string",
            required:true
        }
    },

    fn: async function({payload}){



        var search=await Pet_product.find({name:{$regex: new RegExp('^'+payload+'.*','i')}}).exec();
        //limit the search
        search=search.slice(0,10);
        return this.res.view('pages/index',{payload:search})



    }
}
