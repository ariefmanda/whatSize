function checkLoginHandler(req, res, next) {
  if(req.session.user.role==1){
    next()
  }else{
    res.flash('sesion anda tidak ada di fitur ini')
    res.redirect('/transactions')
  }
}

module.exports = checkLoginHandler
