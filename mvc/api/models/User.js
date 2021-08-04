module.exports={
    tableName:"users",
    attributes:{
        username:{type:"string",required:true},
        password:{type:"string",required:true},
        isAdmin:{type:"boolean",required:true,columnName:"is_admin"}

    },
    owner:{
        model:'Customer',
        unique: true
      }
}