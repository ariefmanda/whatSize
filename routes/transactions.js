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
    include:[models.Item],
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
  models.Item.find({
    where: {
      itemCode: req.body.codeItem
    }
  }).then(item => {
    if ((Number(item.itemStock) - Number(req.body.jumlahItem)) >= 0) {
      models.TransaksiItem.create({TransaksiId: req.params.id, ItemId: item.id, jumlahItem: req.body.jumlahItem}).then(transactionItem => {
        res.redirect(`/transactions/${req.params.id}/show`)
      })
    } else {
      res.flash('Stock anda tidak ada')
      res.redirect(`/transactions/${req.params.id}/show`)
    }
  })
})
module.exports = router;
