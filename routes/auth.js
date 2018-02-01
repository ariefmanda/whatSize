var express = require('express');
var router = express.Router();
const models = require('../models')
const encrypt = require('../helpers/encrypt');
let title ="AUTH"
/* GET users listing. */
router.get('/login',function(req, res, next) {
  res.render('login',{
    title
  })
})
router.post('/login',function(req, res, next) {
  models.User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if(user){
      let success=encrypt.comparePassword(req.body.password,user.password)
        if(success){
          if(user.status==0){
            res.flash('Email anda belum tervalidasi, silahkan cek email')
            res.redirect('/auth/login')
          }else{
            req.session.login = true
            req.session.user = user
            res.redirect('/transactions')
          }
        }else{
          res.flash('Password anda salah')
          res.redirect('/auth/login')
        }
    }else{
      res.flash('Email not found')
      res.redirect('/auth/login')
    }
  })
  .catch(next)
})
router.get('/logout',function(req, res, next) {
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
