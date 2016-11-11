var express =require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
//filesystem and json
var fs = require('fs');

var jsonfile = require('jsonfile');
var file = "formData.json";
jsonfile.spaces = 4;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(
	bodyParser.urlencoded({extended:true })
);

app.get('/blog', function (req, res){
	console.log("Hello Website requested");
	res.send('index');

	});

app.post('/send', function(req, res){
	 if (!req.body) return res.sendStatus(400);
	//form submission from blog form
	var userid =1;
	if(userid){
		userid +=userid;
	}
	blog ={
		userid:userid,
		title:req.body.title,
		msg:req.body.message
	};

jsonfile.writeFile(file, blog, function (err) {
	if(err){
	console.log(err.toString());
	return;
	}
	res.redirect('/posts');
	});
});

app.get('/posts', function (req, res){
	//loop through json file and display
	var obj ={};
	jsonfile.readFile(file, function(err, data) {
		var obj=data;
		console.log(obj);
		
	//var data ={contents};
	res.render("thankyou", obj);
	})
	//res.render('thankyou');

	});

app.listen(port, function(){
var getTimeStamp = new Date();
console.log('Server Started');
});