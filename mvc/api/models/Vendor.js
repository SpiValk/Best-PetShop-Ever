
module.exports={
  table_name:'vendor',
  attributes:{
    companyName    : { type:'string', columnName:'company_name',           required:true},
    contactPerson  : { type:'string', columnName:'company_contact_person', required:true},
    companyEmail   : { type:'string', columnName:'company_email',          required:true},
    companyWebSite : { type:'string', columnName:'company_website',        required:false},
    companyPhone   : { type:'number', columnName:'company_phone',          required:false},


    

    pet_product_id: {
      collection: 'pet_product',
      via:        'vendor_id'
    },

   

  }
};
