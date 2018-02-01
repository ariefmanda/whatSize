var express = require('express');
var router = express.Router();
const models = require('../models')
const email = require('../helpers/email');
const encrypt = require('../helpers/encrypt');
const sessionHelpher = require('../helpers/authSession');
const adminHelpher = require('../helpers/adminSession');
let title = 'User'
/* GET home page. */
router.get('/',sessionHelpher,adminHelpher,function(req,res,next){
  models.User.findAll().then(users=>{
    res.render('user',{
      title,users
    })
  }).catch(err=>{
    next(err)
  })
})
router.get('/change/:id',sessionHelpher,adminHelpher,function(req,res,next){
  models.User.update({
    role:1
  },{
    where:{
      id:req.params.id
    }
  })
  .then(users=>{
    res.redirect('/users')
  }).catch(err=>{
    next(err)
  })
})
router.get('/changeU/:id',sessionHelpher,adminHelpher,function(req,res,next){
  models.User.update({
    role:0
  },{
    where:{
      id:req.params.id
    }
  })
  .then(users=>{
    res.redirect('/users')
  }).catch(err=>{
    next(err)
  })
})
router.get('/add', function(req, res, next) {
  res.render('register',{
    title
  })
});

router.post('/add', function(req, res, next) {
  models.User.create({
    name: req.body.name,
    role: 0,
    status: 0,
    email: req.body.email,
    password: encrypt.encrypt(req.body.password)
  }).then(data=>{
    let link = `http://${req.headers.host}/users/aktiv/${encrypt.encrypt(String(data.id))}`
    email(`${req.body.email}`,link,'Aktivasi Akun whatSize',(err,info)=>{
      if(!err){
        res.flash('Silahkan lihat email anda untuk aktifasi akun ini')
        res.redirect('/')
        next()
      }else{
        Models.User.destroy({where:{id:data.id}}).then(()=>{
          res.flash('Email yang anda gunakan salah')
          res.redirect('/users/add')
          next()
        }).catch(err=>{
          next(err)
        })
      }
    })
  })
  .catch(err=>{
    next(err)
  })
});

router.get('/aktiv/:id',(req,res,next)=>{
  console.log(encrypt.decrypt(req.params.id));
  models.User.update({
    status:1
  },{
    where:{
      id: encrypt.decrypt(req.params.id)
    }
  }).then(data=>{
    res.flash('akun anda sudah aktif silahkan login')
    res.redirect('/auth/login')
  }).catch(err=>{
    next(err)
  })
})

router.get('/forgot',(req,res,next)=>{
  res.render('forgot',{
    title
  })
})
router.post('/forgot',(req,res,next)=>{
  models.User.findOne({
    where:{
      email:req.body.email
    }
  }).then(data=>{
    let link = `http://${req.headers.host}/users/reset/${encrypt.encrypt(String(data.id))}`
    email(`${req.body.email}`,link,'forgot password Akun whatSize',(err,info)=>{
      if(!err){
        res.flash('Silahkan lihat email anda untuk aktifasi akun ini')
        res.redirect('/')
        next()
      }else{
        res.flash('Email yang anda gunakan salah')
        res.redirect('/users/forgot')
        next()
      }
    })
  })
  .catch(err=>{
    next(err)
  })
})
router.get('/reset/:id',(req,res,next)=>{
  models.User.findById(encrypt.decrypt(req.params.id)).then(data=>{
    if(data.id){
      res.render('reset',{
        title,data
      })
    }else{
      res.flash('Data anda tidak ada')
      res.redirect('/users/forgot')
    }
  }).catch(err=>{
    next(err)
  })
})
router.post('/reset/:id',(req,res,next)=>{
  if(req.body.password==req.body.validPassword){
    models.User.update({
      password:req.body.password
    },{
      where:{
        id:encrypt.decrypt(req.params.id)
      }
    }).then(data=>{
      res
    }).catch(err=>{
      next(err)
    })
  }else{
    res.flash('Password anda berbeda')
    res.redirect(`/reset/${req.params.id}`)
  }
})
router.get('/barcode',(req,res,next)=>{
  res.render('barcode/index',{
    title:'Barcode'
  })
})

module.exports = router;
