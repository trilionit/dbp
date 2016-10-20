//PART ONE variables containing book info
	var newTitle="Web Development For Beginners";
	var pgOne="Basic Html, CSS and JavaScript";
	var pgTwo="Git, JQuery and Testing";
	var pgThree="Node.js, Express.js, React.js";

//PART TWO variables containing Second book info
	var secondTitle="Unstanding Javascript";
	var mypageOne="Basic Operators and boolean";
	var mypageTwo="object properties";
	var mypageThree="Functions, Prototypes and Constructors";

//function to enable reuse of this constructor
function myBook(title, pageOne, pageTwo, pageThree){
	this.title=title;
	this.pageOne=pageOne;
	this.pageTwo=pageTwo;
	this.pageThree=pageThree;
}


//calling book object
	var nycda= new myBook(newTitle, pgOne, pgTwo, pgThree);
	var weekOne= new myBook(secondTitle, mypageOne, mypageTwo, mypageThree);

//variables from html
var bookTitle=document.getElementById("title");
var bookOne=document.getElementById("page-one");
var bookTwo=document.getElementById("page-two");
var bookThree=document.getElementById("page-three");

var mTitle=document.getElementById("mtitle");
var pOne=document.getElementById("p-one");
var pTwo=document.getElementById("p-two");
var pThree=document.getElementById("p-three");



//Display in html	
	bookTitle.innerHTML= nycda.title;
	bookOne.innerHTML= nycda.pageOne;
	bookTwo.innerHTML= nycda.pageTwo;
	bookThree.innerHTML= nycda.pageThree;

	mTitle.innerHTML= weekOne.title;
	pOne.innerHTML= weekOne.pageOne;
	pTwo.innerHTML= weekOne.pageTwo;
	pThree.innerHTML= weekOne.pageThree;
