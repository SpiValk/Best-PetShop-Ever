module.exports = async function (req, res, err) {
    const {name, image, id, count, price, vendorPrice} = req.body;
    console.log(image, name, id, count, price);
  
    if(!id || !name){
      res.status(404).json({
        message: 'to mpoulo',
        error: err
      });
    }
  
  
    res.status(200).json({
      message: 'success!!!'
    });
  };