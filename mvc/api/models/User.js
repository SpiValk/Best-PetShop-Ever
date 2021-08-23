module.exports={
  tableName:'user',
  attributes:{
    username        :{type:'string',  columnName:'username',     required:true},
    password        :{type:'string',  columnName:'password',     required:true},
    // avatar:{type:'blob',required:true},
    contact_number  :{type:'number',  columnName:'phone_number', required:true},
    email           :{type:'string',  columnName:'email',        required:true},
    isAdmin         :{type:'number',  columnName:'is_admin',     required:true},


    customer: {
      model:'customer',
      unique: 'true'
    },

    order:{
      model:'order'
    },

    payment: {
      collection:'payment',
      via:        'user'
    },

    donation_recipent: {
      collection: 'donation_recipent',
      via:        'user',
      through:    'donation',
    }
  }
};
