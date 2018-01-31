var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/barcode',(req,res,next)=>{
  res.render('barcode/index',{
    title:'Barcode'
  })})

module.exports = router;
