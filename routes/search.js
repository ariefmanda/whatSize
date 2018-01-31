var express = require('express');
var router = express.Router();
var models = require('../models');
let title = "Barcode"
/* GET home page. */
router.get('/barcode', (req, res, next) => {
  res.render('barcode/index', {title,data:null})
})

router.post('/barcode', (req, res, next) => {
  let code = req.body.result
  models.Item.find({
    include:[models.Brand,models.Size]
    ,where: {
      itemCode: code
    }
  }).then(data => {
    if(!data){
      res.flash('Data tidak ada')
      res.redirect('/search/barcode')
    }else{
      res.render('barcode/index', {title,data})
    }
  }).catch(err => {
    next(err)
  })
})
module.exports = router
