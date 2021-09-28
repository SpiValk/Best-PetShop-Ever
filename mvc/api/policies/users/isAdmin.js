module.exports = async function (req, res, proceed) {
  if (req.session.isAdmin) {
    return proceed();
  }

  res.status(403);
  return res.view('errors/isAdmin');
};
