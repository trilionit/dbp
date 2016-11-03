var express = require("express");
var app = express();

app.get('/', function (req, res){
	console.log("someone requested the homepage");
	res.send("Hello, World");
});

app.get('/countdown', function (req, res){
	console.log("someone requested countdown folder");
	res.send("Hello, World");
});
//http://localhost:3000/square/9
// useful for sending users to particular pages vs php?page=about
app.get('/square/:num', function (req, res){
	var num = parseInt(req.params.num);
	var square= num * num;
	console.log("someone requested doorbell folder");
	res.send(square.toString());
});

//exercise to add a route with parameters 
//eg. http://localhost:3000/users/kofi;

app.get('/users/:name', function (req, res){
		var name = req.params.name;
		var welcome="Welcome " + name;
		var lastLogged = new Date();
		var mssg =welcome + "<br>" +"You logged on at "+ lastLogged;
		// console.log(name + " requested users page");
		// console.log(req.params);
		res.send(mssg.toString());
});
//request using patterns
//eg http://localhost/users/?page=about
app.get('/watch.html', function (req, res){
	var name = req.query.page;
	var welcome="Your are on " + name + "Page";
	var lastLogged = new Date();
	var mssg =welcome + "<br>" +"You logged on at "+ lastLogged;
	console.log(name + " requested users page");
	console.log(req.params);
	res.send(mssg.toString());
});

///using *page.htmnl?
app.get('*', function(req, res){
	res.status(404).send("wrong page")
});

var port =3000;
app.listen(port, function(){
	console.log("Express Js started on port" + port);
});