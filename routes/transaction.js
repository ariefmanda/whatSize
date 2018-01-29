var express = require('express');
var router = express.Router();
const models = require('../models')
const encrypt = require('../helpers/encrypt');
let title='Transactions'
router.get('/',(req,res,next)=>{
  models.Transaksi.findAll(
    {
      include:[models.User]

    }
  ).then(transactions=>{
    res.render('transaction',{
      title,transactions
    })
  }).catch(err=>{
    next(err)
  })
})
module.exports = router;
