var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET item. */
router.get('/', function (req, res, next) {
    models.Item.findAll({})
    .then((result) => {
        // res.send(result)
        res.render('item', { data: result })
    })
    .catch(err => {
        console.log(err)
    })
});



module.exports = router;