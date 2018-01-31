function checkLoginHandler(req, res, next) {
  if(req.session.user==1){
    next()
  }else{
    res.redirect('/transactions')
  }
}

module.exports = checkLoginHandler
