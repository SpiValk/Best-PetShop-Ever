module.exports={
  tableName:'payment',
  attributes: {
    payment_type : {type: 'string', columnName: 'payment_type', required: true},

    user_id: {
      model: 'user',
    },
  }};
