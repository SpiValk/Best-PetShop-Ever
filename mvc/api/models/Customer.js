module.exports={
tableName:'customers',
attributes:{
    firstName       :{type:'string', columnName:'first_name',     required:true},
    lastName        :{type:'string', columnName:'last_name',      required:true},
    address         :{type:'string', columnName:'address',        required:true},
    contact_number  :{type:'number', columnName:'contact_number', required:true},
    email           :{type:"string", columnName:'email',          required:true},

    // user: {
    //     collection:'user',
    //     via: 'customer_user'
    //   }

}}