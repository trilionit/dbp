	var guessNum=guess();

var message;
var guessNum= function (randNum, validate){
	var a= Math.random() * 10;
	var b= Math.round(a);
	return b;
}
	function validate(){
		this.guess=b;
		this.randNum=randNum;
		if guess < randNum{
			message= randNum + " is too low";
		}
		else if( guess > randNum){
			message = randNum + " is too high";
		}

		else if (isNaN(guess)){
			message = randNum + " is not a number";
		}
		else{
			message = "You got it";
		}
	}


var newNum=guessNum(3, message);
console.log(newNum);

// if(newNum < guessNum){

// 	message =newNum  + " is too low. Try again";

// }
// else if(newNum > guessNum){

// 	message = newNum  + " is too high. Try again";

// }
// else if(isNaN(newNum)){

// 	message="Please enter a valid number";

// }
// else {
// 	message="You got it";

// }

// module.exports=function guess(){
// 	var a= (Math.random()* 10);
// 	var b= Math.round(a);
// 	return b;
// }	
// //module.exports.message=message;