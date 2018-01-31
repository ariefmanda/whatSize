var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res, next) {
    models.Size.findAll({
    })
        .then((result) => {
            res.render('size', { data: result })
        })
        .catch(err => {
            next(err)
        })
});

router.get('/add', (req, res, next) => {
    res.render('addsize')
})

router.post('/add', (req, res, next) => {
    models.Size.create({
        sizeNumber: req.body.sizeNumber
    })
        .then(() => {
            res.redirect('/size')
        })
        .catch(err => {
            next(err)
        })
})

router.get('/edit/:id', (req, res, next) => {
    models.Size.findById(req.params.id)
        .then((result) => {
            res.render('editsize', { data: result })
        })
        .catch(err => {
            next(err)
        })
})

router.post('/edit/:id', (req, res, next) => {
    models.Size.update({
        sizeNumber: req.body.sizeNumber
    }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/size')
        })
        .catch(err => {
            next(err)
        })
})

router.get('/delete/:id', (req, res, next) => {
    models.Size.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.redirect('/size')
        })
        .catch(err => {
            next(err)
        })
})



module.exports = router;