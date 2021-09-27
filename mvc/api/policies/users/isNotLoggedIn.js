module.exports = async function(req,res, proceed) {
  if(req.session.email) {
    return res.forbidden();
  }
  res.status(200);
  return res.view('pages/users/register');

};
