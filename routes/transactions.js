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
    // res.send(transactions)
    transactions = transactions.filter(e=>{
      let bol=true
      if(e.TransaksiItems.length<1){
        bol=false
      }
      return bol
    })
    transactions = transactions.map(e => {
      e.date = moment(e.createdAt).format('DD-MM-YYYY')
      return e
    })
    res.render('transactionList', {title, transactions})
  }).catch(err => {
    next(err)
  })
})
router.get('/new', (req, res, next) => {
  res.render('transactionNew',{
    title
  })
})
router.post('/new', (req, res, next) => {
  console.log(req.body);
  if(Number(req.body.jumlahItem)>0){
    models.Item.find({
      where: {
        itemCode: req.body.codeItem.slice(0,-1)
      }
    }).then(item => {
      if(item){
        if ((Number(item.itemStock) - Number(req.body.jumlahItem)) >= 0) {
          models.Transaksi.create({UserId: req.session.user.id}).then(transaction => {
            models.Item.update({
              itemStock: (Number(item.itemStock) - Number(req.body.jumlahItem))
            }, {
              where: {
                id: item.id
              }
            }).then(items => {
              models.TransaksiItem.create({TransaksiId: transaction.id, ItemId: item.id, jumlahItem: req.body.jumlahItem}).then(transactionItem => {
                res.redirect(`/transactions/${transaction.id}/show`)
              })
            }).catch(err => {
              next(err)
            })
          }).catch(err => {
            next(err)
          })
        } else {
          res.flash('Stock anda tidak ada')
          res.redirect(`/transactions/new`)
        }
      }else{
        res.flash('Kode anda tidak ada')
        res.redirect(`/transactions/new`)
      }
    })
  }else{
    res.flash('Jumlah yang anda masukkan harus lebih dari 0')
    res.redirect(`/transactions/new`)
  }
})
router.get('/:id/show', (req, res, next) => {
  models.TransaksiItem.findAll({
    include:[{model:models.Item, include:[models.Size,models.Brand]}],
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
  models.TransaksiItem.findById(req.params.id).then(transaction=>{
    models.Item.findById(transaction.ItemId).then(item=>{
      let stock = item.itemStock + transaction.jumlahItem
      models.Item.update({
        itemStock:stock
      },{
        where:{
          id:item.id
        }
      }).then(()=>{
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
      }).catch(err => {
        next(err)
      })
    }).catch(err => {
      next(err)
    })
  }).catch(err => {
    next(err)
  })
})

router.post('/:id/add', (req, res, next) => {
  if(Number(req.body.jumlahItem)>0){
    models.Item.find({
      where: {
        itemCode: req.body.codeItem.slice(0,-1)
      }
    }).then(item => {
      if(item){
        if ((Number(item.itemStock) - Number(req.body.jumlahItem)) >= 0) {
          models.Item.update({
            itemStock: (Number(item.itemStock) - Number(req.body.jumlahItem))
          }, {
            where: {
              id: item.id
            }
          }).then(items => {
            models.TransaksiItem.create({TransaksiId: req.params.id, ItemId: item.id, jumlahItem: req.body.jumlahItem}).then(transactionItem => {
              res.redirect(`/transactions/${req.params.id}/show`)
            })
          }).catch(err => {
            next(err)

          })
        } else {
          res.flash('Stock anda tidak ada')
          res.redirect(`/transactions/${req.params.id}/show`)
        }
      }else{
        res.flash('Kode anda tidak ada')
        res.redirect(`/transactions/${req.params.id}/show`)
      }
    })
  }else{
    res.flash('Jumlah yang anda masukkan harus lebih dari 0')
    res.redirect(`/transactions/${req.params.id}/show`)
  }

})
module.exports = router;
