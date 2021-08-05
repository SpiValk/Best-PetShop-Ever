module.exports={
tableName:'customers',
attributes:{
    firstName:{type:'string',columnName:'first_name',required:true},
    lastName:{type:'string',columnName:'last_name',required:true},
    address:{type:'string',required:true},
    phoneNumber:{type:'number',columnName:'phone_number',required:true},
    email:{type:"string",required:true},
    // username:{type:"string",required:true},
    // password:{type:"string",required:true},

    user: {
        collection:'User',
        via: 'customer_user'
      }

}}