var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const reload = require('reload');
const session = require('express-session');
const errorHelpher = require('./helpers/errorhandler');
const messageHelpher = require('./helpers/flashMessage');
const sessionHelpher = require('./helpers/authSession');
const adminHelpher = require('./helpers/adminSession');
var index = require('./routes/index');
var auth = require('./routes/auth');
var users = require('./routes/users');
var transactions = require('./routes/transactions');
var item = require('./routes/item');
var brand = require('./routes/brand');
var size = require('./routes/size');
var transactions = require('./routes/transactions');
var search = require('./routes/search');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(cookieParser());
app.use(logger('dev'));
app.use(session({secret: 'iloveyou'}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(messageHelpher)
app.use(function(req,res,next){
  res.locals.login=req.session.login
  res.locals.user=req.session.user
  next()
})
app.use('/auth', auth);
app.use('/users', users);
app.use('/transactions',sessionHelpher, transactions);
app.use('/items',sessionHelpher,adminHelpher, item);
app.use('/brand',sessionHelpher,adminHelpher, brand);
app.use('/size',sessionHelpher,adminHelpher, size);
app.use('/search', search);
app.use('/', index);
// catch 404 and forward to error handler
app.use('*',(req,res,next)=>{
  res.flash('Situs tidak ditemukan')
  res.redirect('/')
});

// error handler
app.use(errorHelpher);

module.exports = app;
