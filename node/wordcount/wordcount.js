var fs=require("fs");

fs.readFile("read.txt", "utf-8", function(err, contents){
//ERROR if reading fails
if(err){
console.log(err.toString());
return;
}

var text = contents.split(" ");
var charArray=contents.split("");
var charCount=contents.split("").length;
var newLine=contents.split("\n").length;
var numWords=text.length;
var count=0;
//function to count the characters
//Get specific character occurence in the text file.
function getCount(word, chars){
	for (var i=0; i < word.length; i++){
		if(	word[i]== chars){
		 ++count;
		}
	}
	return count;
}
var getChar="c";
var myCount=getCount(charArray, getChar);
console.log("There are "+ charCount + " Characters " + numWords +" Words "+ newLine + " New Lines in read.txt file" );
console.log(getChar + " Occurs "+ myCount + " times in the full text");
});
