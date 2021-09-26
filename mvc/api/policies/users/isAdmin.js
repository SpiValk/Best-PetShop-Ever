module.exports = async function (req, res, proceed) {
  if (req.session.isAdmin) {
    return proceed();
  }

  // return res.forbidden()
  res.status(403);
  return res.view('errors/isAdmin');

};
