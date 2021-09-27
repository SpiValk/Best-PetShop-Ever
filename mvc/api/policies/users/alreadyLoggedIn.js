module.exports = async function(req, res, proceed) {
  if(!req.session.email) {
    return proceed();
  }
  res.status(403);
  return res.view('errors/alreadyLoggedIn');
};
