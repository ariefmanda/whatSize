function checkLoginHandler(req, res, next) {
  req.session.login=true
  let login = req.session.login
  req.session.user={
    id:1,
    name:'admin'
  }
  if(login){
    next()
  }else{
    res.flash('Please Login before continue')
    res.redirect('/auth/login')
  }
}

module.exports = checkLoginHandler
