"use strict"
var express =require("express");
var app = express();
var port = 3000;

var checkNumber= require("./checkNumber")

var bodyParser = require('body-parser');

app.use(
  bodyParser.urlencoded({extended:true })
);
app.use(express.static('public'));

let correctNumber = function guess(){
	var a= (Math.random()* 10);
	var b= Math.round(a);
	return b;
}	

// app.get('/', function(req, res) {
// 	res.send('index')
// })

app.get('/guess', function (req, res){
	let userGuess=parseInt(req.query.number);
	let responseObject = checkNumber(userGuess, correctNumber);

	res.json(responseObject);


});

app.listen(port, function(){
	console.log("Web 2.0 app started on port" + port);
});