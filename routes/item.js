var express = require('express');
var router = express.Router();

/* GET items. */
router.get('/', function (req, res, next) {
    res.send('ini halaman items');
});






module.exports = router;