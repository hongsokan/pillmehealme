const express = require('express')
const app = express()
const cors = require('cors');
var path = require('path'); 
var auth = require('./lib/auth');
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var request = require('request');
var tokenKey = ""
const router = express.Router();
router.get('/', cors(), (req, res) => { res.send('cors!') });
//--------------------------------------------------
// var connection = mysql.createConnection({
//   host     : '',
//   user     : '',
//   password : '',
//   database : ''
// });
 
// connection.connect();
 
// connection.query('SELECT * FROM customer_info', function (error, results, fields) {
//   if (error) throw error;
// //   console.log('The solution is: ', results);
// });

// connection.query('SELECT * FROM financial_info', function (error, results, fields) {
//     if (error) throw error;
//     //console.log('The solution is: ', results);
//   });

// connection.query("SELECT * FROM center_info", function(err, results, field){
//     // console.log(results);
// })
 
// connection.end();
//------------------------------------------------

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('main')
})

app.get('/index', function (req, res) {
    res.render('index')
})

app.get("/login", function(req,res){
    res.render('login')
})

app.get('/mypage', function (req, res) {
    res.render('mypage')
})

app.get('/financial_products', function(req, res){
    res.render('financial_products');
  })

app.get('/qrcode', function(req, res){
    res.render('qrcode')
})

app.get('/payment', function(req, res){
    res.render('payment')
})

app.get('/trainer', function(req, res){
    res.render('trainer')
})

app.get('/tr_payment', function(req, res){
    res.render('tr_payment')
})


app.listen(3000, function(){
    console.log("Connected localhost:3000");
})
