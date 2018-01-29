function checkLoginHandler(req, res, next) {
  let login = req.session.login
  if(login){
    next()
  }else{
    res.flash('Please Login before continue')
    res.redirect('/auth/login')
  }
}

module.exports = checkLoginHandler
