var express =require("express");
var app = express();
var port = 3000;
app.use(express.static('public'));
//app.set('view engine', 'html');
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
//var urlBodyParser= bodyParser.urlencoded({extended:true});
//app.use(bodyParser.json());
//or use 
app.use(
	bodyParser.urlencoded({extended:true })
);

//script for our hello page
//index page
app.get('/hello', function (req, res){
	console.log("Hello Website requested");
	res.send('index');

	});
app.post('/send', function(req, res){
	 if (!req.body) return res.sendStatus(400);
	//form submission from hello form
	blog ={
		title:req.body.title,
		msg:req.body.message
	};
	
	//console.log(blog.title +" \n" +  msg);
	res.render('thankyou', blog);

});

app.listen(port, function(){;
var getTimeStamp = new Date();
console.log('Express Server Started on ' + getTimeStamp);
});