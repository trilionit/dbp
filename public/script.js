<script>
/*
		var now = new Date();
		var hours=now.getHours();
		var minutes=now.getMinutes();
		var amPm="";
		var newTime= hours -12;
		//calculate the hour
	
		//amPM is PM if hours is greater than or equal to  12;
		if(hours >= 12)
		{
			amPm="PM"
		} 
		else if( hours < 12)
		{
			newTime= hours;
			amPm="AM";

		}
		else if(hours ==0)
		{
			newTime=0;
			amPm="MidNight";
		}
		if (newTime > 10)
		{
			newTime=newTime;
		} 
		else if(newTime <10)
		{
			newTime="0"+newTime;
		}
		if (minutes < 10){
			minutes ="0"+ minutes
		}
		alert("The Time is " + newTime + ":" + minutes + amPm);		
*/
/* random numbers 
var myNum=7;
var number=prompt("Guess a Number Between 1 to 10");
var i="";

for (i=0; i<3; i++){
	if(number != myNum){
		
	}
}

var str="The quick brown fox jumped over the lazy dog. Also tried adding a new sentence. Lets see the word count now.";
var myArray=str.split(" ");
var strLen = myArray.length; 
var rVerse =myArray.reverse();
console.log(rVerse);

/* Reverse a Number 

var myNum=[1,2,3,4,5];
var rVsers= myNum.reverse();
console.log(rVsers);


var numeric = [
    ['input1','input2'],
    ['input3','input4'],
]
console.log(numeric[0][1]);
reversing a string

/*functions 

function addNum(d,f,g){
	var p = d+f+g;
	return p;
}
var myNum= addNum(1,2,3);
console.log(myNum);


function textNum(str){
	myArray=str.split(" ");
	strLen=myArray.length;
	return strLen;
}
var str=prompt("Please enter your Text here");
var myStr=textNum(str);
alert("Your Text is '"+ str+"' You have "+ myStr +" Characters without spaces");

function shorten(str){
	myArray=str.split(" ");
	first=myArray[0];
	return first;
}

var str="Some text coming in here";
var myStr=shorten(str);
alert(myStr + "...");
//Capitalizing the first letter of a word
Borrowed from sitepoint
https://www.sitepoint.com/community/t/capitalizing-first-letter-of-each-word-in-string/209644
*/
// function titleCase(str){

// 	 str = str.split(" ");
	 
// 		for (var i =0; i < str.length; i++){
// 			//str[i] = str[i].split("");
// 			str[0] = str[0].toUpperCase();
// 		}
// 		return str.join(" ");

// }
// // var str="the cat walked out into the rain. the cat is wet";
//  newFormat= titleCase(str);
//  console.log(str);

//function titleCase(str){
	//str = str.split(" ");
//}
//step by step process in capitalizing first word.
//var str="teachers are good. we should Appreciate them";//my string
//  str = str.split(" ");//change to array
//  newStr=str[0].split(""); // take first value in array
//  newStr[0]=newStr[0].toUpperCase(); //make first value of new array capital
//  newStr=newStr.join("");//join new array to form new capital word
 		
// var newPhrase = str.shift(); //remove previous word from first array
// newPhrase=str.join(" "); //join first array
// newString=newStr + " "+ newPhrase; //form new phrase with new capitalized word inclusive.
// //var newFormat= titleCase(str);
// console.log(newString); //log to system
//BETTER WAY OF DOING ABOVE including a loop0
//  function changeFormat(str){
// 	//first split words into array
// 	var str= str.split(" ");
// 		for(var i=0; i<str.length; i++){
// 			str[0]=str.split("");
			
// 		}
// 		return str;
// }
// var str="the cat went out in the rain. the cat is wet";
// var nstr=changeFormat(str);
// console.log(nstr);

var newString="Moldova away were the opposition with Ivanovic, captaining his nation, heading in a corner on 37 minutes to make it 2-0. It was his 12 international goal. The final score was 3-0 with Southampton’s Dusan Tadic also among the goals and it moves Serbia level on four points with Wales, Austria and Ireland with two games played. Nemanja Matic was suspended.";
// function count_letters(stringName){
// 	var letter= 0;//initialize variable

// 		for(var i=0; i<stringName.length; i++){
// 		letter=stringName[i];
// 			if(letter > -1){
// 			letter[i]++;
// 			}
// 		return letter;
// 		}
// }
// var total=count_letters(newString);
// console.log(total);



// 
//vending Machine algorithm
//
//
//
// var vendingMachine={
// 	"price":150,
// 	"total":0,
// 	"addMoney": function(amount){
// 		this.total +=amount;
// 		//or vendingMachine.total +=amount
// 	},
// 	vendItem:function(){
// 		console.log("Coming RIght Up!");
// 	},
// 	makeselection: function(){
// 		if(this.total < this.price){
// 			console.log("Need more money");
// 			}else{
// 				this.vendItem();
			
// 		if(this.total > this.price){
// 			var change = this.total - this.price;
// 			console.log("returning: "+ change);
// 			}
// 		}

// 	}
// }
// vendingMachine.addMoney(50);
// vendingMachine.makeselection();
// vendingMachine.addMoney(90);
// vendingMachine.makeselection();
// vendingMachine.addMoney(20);
// vendingMachine.makeselection();

//DOM MANIPULATION

</script>