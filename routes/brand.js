var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res, next) {
    models.Brand.findAll({
    })
        .then((result) => {
            res.render('brand', { data: result })
        })
        .catch(err => {
            next(err)
        })
});

router.get('/add', (req, res, next) => {
    res.render('addbrand')
})

router.post('/add', (req, res, next) => {
    models.Brand.create({
        brandName: req.body.brandName
    })
        .then(() => {
            res.redirect('/brand')
        })
        .catch(err => {
            next(err)
        })
})

router.get('/edit/:id', (req, res, next) => {
    models.Brand.findById(req.params.id)
        .then((result) => {
            res.render('editbrand', { data: result })
        })
        .catch(err => {
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
        })
        .then(() => {
            res.redirect('/brand')
        })
        .catch(err => {
            next(err)
        })
})

router.get('/delete/:id', (req, res, next) => {
    models.Brand.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.redirect('/brand')
        })
        .catch(err => {
            next(err)
        })
})



module.exports = router;