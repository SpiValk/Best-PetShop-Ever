
module.exports={
  tableName:'discount',
  attributes:{
    discountName     : { type:'string',  columnName: 'disc_name',   required:true },
    description      : { type:'string',  columnName: 'description', required:true },
    discountPercent  : { type:'number',  columnName:'disc_percent', required:true },
    active           : { type:'number',  columnName:'active',       required:true },



    pet_product:{
      model:'pet_product',
    }
  }
};
