var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res, next) {
    models.Brand.findAll({
        // include: [models.Item, models.Size]
    })
        .then((result) => {
            res.send(result)
            // res.render('brand', { data: result })
        })
        .catch(err => {
            next(err)
        })
});



module.exports = router;