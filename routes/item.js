var express = require('express');
var router = express.Router();
var models = require('../models');
var title = 'Items'

/* GET item. */
router.get('/', function(req, res, next) {
  models.Item.findAll({}).then((result) => {
    // res.send(result)
    res.render('item', {
      data: result,
      title
    })
  }).catch(err => {
    console.log(err)
  })
});

router.get('/add', (req, res) => {
  res.render('edititem',{
    title,data:null
  })
})

router.post('/add', (req, res,next) => {
  models.Item.create({
    BrandId: req.body.BrandId,
    SizeId: req.body.SizeId,
    itemName: req.body.itemName,
    itemPrice: req.body.itemPrice,
    itemStock: req.body.itemStock,
    itemCode: req.body.itemCode
  }).then(() => {
    res.redirect('/items')
  }).catch(err => {
    next(err)
  })
})

router.get('/edit/:id', (req, res,next) => {
  models.Item.findById(req.params.id).then((result) => {
    res.render('edititem', {
      data: result,
      title
    })
  }).catch(err => {
    next(err)
  })
})

router.post('/edit/:id', (req, res) => {
  models.Item.update({
    BrandId: req.body.BrandId,
    SizeId: req.body.SizeId,
    itemName: req.body.itemName,
    itemPrice: req.body.itemPrice,
    itemStock: req.body.itemStock,
    itemCode: req.body.itemCode
  }, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/items')
  }).catch(err => {
    console.log(err)
  })
})

router.get('/delete/:id', (req, res) => {
  models.Item.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/items')
  }).catch(err => {
    console.log(err)
  })
})

module.exports = router;
