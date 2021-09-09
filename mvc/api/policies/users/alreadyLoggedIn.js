module.exports = async function(req, res, proceed) {
    if(!req.session.username) {
        return proceed()
    }
    res.status(200)
    return res.view('pages/users/logoutbutton')
}