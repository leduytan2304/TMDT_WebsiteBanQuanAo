var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var order = require('./routes/order');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// router.get('/vnpay_ipn', function (req, res, next) {
//   var vnp_Params = req.query;
//   var secureHash = vnp_Params['vnp_SecureHash'];

//   delete vnp_Params['vnp_SecureHash'];
//   delete vnp_Params['vnp_SecureHashType'];

//   vnp_Params = sortObject(vnp_Params);
//   var config = require('config');
//   var secretKey = config.get('vnp_HashSecret');
//   var querystring = require('qs');
//   var signData = querystring.stringify(vnp_Params, { encode: false });
//   var crypto = require("crypto");     
//   var hmac = crypto.createHmac("sha512", secretKey);
//   var signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");     
   

//   if(secureHash === signed){
//       var orderId = vnp_Params['vnp_TxnRef'];
//       var rspCode = vnp_Params['vnp_ResponseCode'];
//       //Kiem tra du lieu co hop le khong, cap nhat trang thai don hang va gui ket qua cho VNPAY theo dinh dang duoi
//       res.status(200).json({RspCode: '00', Message: 'success'})
//   }
//   else {
//       res.status(200).json({RspCode: '97', Message: 'Fail checksum'})
//   }
// });

app.use('/order', order);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
