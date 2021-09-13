module.exports = async function (req, res, proceed) {
    if (req.session.username) {
        return proceed()
    }
   
    // return res.forbidden()
    res.status(403)
    return res.view('403') // almost a custom response 403
}