module.exports = {
    tableName: 'donation_payment',
    attributes: {
        provider      : { type: 'string',  columnName: 'provider',      required: true },
        payment_type  : { type: 'string',  columnName: 'paymeny_type',  required: true },
        payment_info  : { type: 'string',  columnName: 'payment_info',  required: true },
    
        donation_recipent: {
            model:'donation_recipent',
            via:  'donation_payment'
          }}}