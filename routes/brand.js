var express = require('express');
var router = express.Router();
var models = require('../models');
var title = 'Items'
router.get('/', function(req, res, next) {
  models.Brand.findAll({}).then((result) => {
    res.render('brand', {
      dataEdit:null,
      data: result,
      title
    })
  }).catch(err => {
    next(err)
  })
});

router.post('/', (req, res, next) => {
  models.Brand.create({brandName: req.body.brandName}).then(() => {
    res.redirect('/brand')
  }).catch(err => {
    next(err)
  })
})

router.get('/edit/:id', (req, res, next) => {
  models.Brand.findById(req.params.id).then((resultEdit) => {
      models.Brand.findAll().then((result) => {
        res.render('brand', {
          dataEdit:resultEdit,
          data: result,
          title
        })
      }).catch(err => {
        next(err)
      })
  }).catch(err => {
    next(err)
  })
})

router.post('/edit/:id', (req, res, next) => {
  models.Brand.update({
    brandName: req.body.brandName
  }, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/brand')
  }).catch(err => {
    next(err)
  })
})

router.get('/delete/:id', (req, res, next) => {
  models.Brand.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/brand')
  }).catch(err => {
    next(err)
  })
})

module.exports = router;
