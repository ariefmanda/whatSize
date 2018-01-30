var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET item. */
router.get('/', function (req, res, next) {
    models.Item.findAll({
        include:[models.Brand, models.Size]
    })
    .then((result) => {
        // res.send(result)
        res.render('item', { data: result })
    })
    .catch(err => {
        next(err)
    })
});

router.get('/add', (req, res, next) => {
    res.render('additem')
})

router.post('/add', (req, res, next) => {
    models.Item.create({
        BrandId: req.body.BrandId,
        SizeId: req.body.SizeId,
        itemName: req.body.name,
        itemPrice: req.body.price,
        itemStock: req.body.stock,
        itemCode: req.body.code
    })
    .then(() => {
        res.redirect('/item')
    })
    .catch(err => {
        next(err)
    })
})

router.get('/edit/:id', (req, res, next) => {
    models.Item.findById(req.params.id)
    .then((result) => {
        res.render('edititem', {data: result})
        // res.send(result.itemName)
    })
    .catch(err => {
        next(err)
    })
})

router.post('/edit/:id', (req, res, next) => {
    models.Item.update({
        BrandId: req.body.BrandId,
        SizeId: req.body.SizeId,
        itemName: req.body.name,
        itemPrice: req.body.price,
        itemStock: req.body.stock,
        itemCode: req.body.code
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.redirect('/item')
    })
    .catch(err => {
        next(err)
    })
})

router.get('/delete/:id', (req, res, next) =>{
    models.Item.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.redirect('/item')
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router;