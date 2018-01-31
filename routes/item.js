var express = require('express');
var router = express.Router();
var models = require('../models');
var title = 'Items'
var barcode = require('../helpers/barcode')
/* GET item. */
router.get('/', function(req, res, next) {
  models.Item.findAll({}).then((result) => {
    // res.send(result)
    res.render('item', {
      data: result,
      title
    })
  }).catch(err => {
    next(err)
  })
});

router.get('/add', (req, res, next) => {
  models.Brand.findAll().then(brands => {
    models.Size.findAll().then(sizes => {
      res.render('edititem', {
        title,
        data: null,
        brands,
        sizes,
        barcode: barcode()
      })
    }).catch(err => {
      next(err)
    })
  }).catch(err => {
    next(err)
  })
})

router.post('/add', (req, res, next) => {
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

router.get('/edit/:id', (req, res, next) => {
  models.Item.findById(req.params.id).then((result) => {
    models.Brand.findAll().then(brands => {
      models.Size.findAll().then(sizes => {
        brands.map(e=>{
          if(e.id==result.BrandId){
            result.brandName=e.brandName
          }
        })
        sizes.map(e=>{
          if(e.id==result.BrandId){
            result.sizeName=e.sizeNumber
          }
        })
        res.render('edititem', {
          data: result,
          title,
          brands,
          sizes,
          barcode:null
        })
      }).catch(err => {
        next(err)
      })
    }).catch(err => {
      next(err)
    })
  }).catch(err => {
    next(err)
  })
})

router.post('/edit/:id', (req, res, next) => {
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
    next(err)
  })
})

router.get('/delete/:id', (req, res, next) => {
  models.Item.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/items')
  }).catch(err => {
    next(err)
  })
})

module.exports = router;
