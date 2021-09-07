module.exports={
  tableName:'user',
  attributes:{
    username :{
    type:'string',
    columnName:'username',
    required:true,
    unique: true,
    // isEmail: true
   }, 


    password :{
      type:'string',
      columnName:'password', 
      required:true, 
      protect: true},

    // avatar:{type:'blob',required:true},
    //  contact_number  :{type:'number',  columnName:'phone_number', required:true},

    email :{
       type:'string',
       isEmail: true,
       columnName:'email', 
       required:true,
       unique: true},


       isAdmin :{
         type:'number',  
         columnName:'isAdmin',     
         required:true},

    customer_id:{
      collection: 'customer',
      via: 'user_id'
    },

    order_id:{
    model:'order'
    },

    payment_id: {
      collection:'payment',
      via:        'user_id'
    },

    donation_recipient_id: {
      collection: 'donation_recipient',
      via:        'user_id',
      through:    'donation',
    }

    
  }
}
