module.exports = async function(req, res, proceed) {
    // console.log(req.session.username)
    if(!req.session.username) {
        // console.log(req.session)
        return proceed()
    }
    res.status(200)
    return res.view('pages/users/logoutbutton')
}