var express = require('express');
var router = express.Router();
const models = require('../models')
const email = require('../helpers/email');
const encrypt = require('../helpers/encrypt');
const moment = require('moment');
let title = 'Transactions'
/* GET home page. */

router.get('/', (req, res, next) => {
  models.Transaksi.findAll({
    include: [models.TransaksiItem, models.User]
  }).then(transactions => {
    transactions = transactions.map(e => {
      e.date = moment(e.createdAt).format('DD-MM-YYYY')
      return e
    })
    res.render('transactionList', {title, transactions})
  }).catch(err => {
    next(err)
  })
})
router.get('/:id/show', (req, res, next) => {
  models.TransaksiItem.findAll({
    where: {
      TransaksiId: req.params.id
    }
  }).then(transactionItems => {
    transactionItems = transactionItems.map(e => {
      e.date = moment(e.createdAt).format('DD-MM-YYYY')
      return e
    })
    res.render('transactionShow', {title, transactionItems, transactionId: req.params.id})
  }).catch(err => {
    next(err)
  })
})
router.get('/:idTransaksi/:id/delete', (req, res, next) => {
  models.TransaksiItem.destroy({
    where: {
      id: req.params.id
    }
  }).then(transactionItems => {
    res.flash('Data sudah dihapus')
    res.redirect(`/transactions/${req.params.idTransaksi}/show`)
  }).catch(err => {
    next(err)
  })
})
router.get('/add', (req, res, next) => {
  models.Transaksi.create({UserId: req.session.user.id}).then(transaction => {
    res.redirect(`/transactions/${transaction.id}/show`)
  }).catch(err => {
    next(err)
  })
})
router.post('/:id/add', (req, res, next) => {
  res.send(req.body)
  // models.Item.find({
  //   where: {
  //     codeItem: codeItem
  //   }
  // }).then(item => {
  //   if ((Number(item.stock) - Number(req.body.jumlahItem)) >= 0) {
  //     models.transactionItems.create({TransaksiId: req.params.id, Itemid: item.id, jumlahItem: req.body.jumlahItem}).then(transactionItem => {
  //       res.redirect(`/transactions/${transaction.id}/show`)
  //     })
  //   } else {
  //     res.flash('Stock anda tidak ada')
  //     res.redirect(`/transactions/${transaction.id}/show`)
  //   }
  // })
})
router.get('/barcode',(req,res,next)=>{
  res.render('barcode/index',{
    title
  })
})
module.exports = router;
