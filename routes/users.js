var express = require('express');
var router = express.Router();
let title = 'User'
/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('register',{
    title
  })
});

module.exports = router;
