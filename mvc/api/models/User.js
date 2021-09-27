module.exports={
  tableName:'user',
  attributes:{

    username        : { type:'string', columnName:'username', required:true, unique: true,},
    password        : { type:'string', columnName:'password', required:true, protect: true},
    email           : { type:'string', isEmail: true, columnName:'email', required:true,unique: true},
    isAdmin         : { type:'number', columnName:'isAdmin', required:true},

    firstName       : { type:'string', columnName:'first_name',     required:true },
    lastName        : { type:'string', columnName:'last_name',      required:true },
    address         : { type:'string', columnName:'address',        required:true },
    contact_number  : { type:'number', columnName:'contact_number', required:true },
    //  wallet          : { type:'number', required:true },


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
};
