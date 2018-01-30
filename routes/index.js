var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

<<<<<<< HEAD





module.exports = router;
=======
router.get('/barcode',(req,res,next)=>{
  res.render('barcode/index',{
    title:'Barcode'
  })})
module.exports = router;
>>>>>>> transaction 28%
