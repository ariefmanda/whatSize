var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const session = require('express-session');
const errorHelpher = require('./helpers/errorHandler');
const messageHelpher = require('./helpers/flashMessage');
const sessionHelpher = require('./helpers/authSession');
var index = require('./routes/index');
var auth = require('./routes/auth');
var users = require('./routes/users');
var transactions = require('./routes/transactions');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(logger('dev'));
app.use(session({secret: 'iloveyou'}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(messageHelpher)
app.use(function(req,res,next){
  res.locals.login=req.session.login
  next()
})

app.use('/auth', auth);
app.use('/users', users);
app.use('/transactions', transactions);
app.use('/',sessionHelpher, index);
// catch 404 and forward to error handler
app.use('*',(req,res,next)=>{
  res.flash('Situs tidak ditemukan')
  res.redirect('/')
});

// error handler
app.use(errorHelpher);

module.exports = app;
