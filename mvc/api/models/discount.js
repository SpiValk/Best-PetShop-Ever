module.exports={
  tableName:'discount',
  attributes:{
    discountName:{type:'string',columnName: 'disc_name',required:true},
    description:{type:'string',required:true},
    discountPercent:{type:'number',columnName:'disc_percent',required:true},
    active:{type:'boolean',required:true}
  },


  //   products:{
  //     collection:'Product',
  //     via:'Product_discount'
  //   }

};
