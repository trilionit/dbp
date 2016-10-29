var fs=require("fs");

fs.readFile("read.txt", "utf-8", function(err, contents){
//ERROR if reading fails
if(err){
console.log(err.toString());
return;
}
//function to count the characters
var text = contents.split(" ");
var charCount=contents.split("").length;
var newLine=contents.split("\n").length;
//number of words
var numWords = text.length;
console.log("There are "+ charCount + " Characters " + numWords +" Words "+ newLine + " New Lines in read.txt file" );
// console.log(text);
// console.log(newLine);
// console.log(numWords);
// console.log(charCount);
});
