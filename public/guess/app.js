var express = require("express");
var app = express();

function guess(){
	var a= (Math.random()* 10);
	var b= Math.round(a);
	return b;
}	
app.get('/guess/:num', function (req, res){
var newNum = parseInt(req.params.num);
var guessNum=guess();
var message;

if(newNum < guessNum){

	message = newNum  + " is too low. Try again";

}
else if(newNum > guessNum){

	message = newNum  + " is too high. Try again";

}
else if(isNaN(newNum)){

	message="Please enter a valid number";

}
else {
	message="You got it";

}

	console.log(message);
	res.send(message);
});

var port =3000;
app.listen(port, function(){
	console.log("Express Js started on port" + port);
});