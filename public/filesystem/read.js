var fs=require("fs");
fs.readFile("file.html", "utf-8", function(err, contents){
if(err){
console.log(err.toString());
return;
}
console.log("loaded the file");
console.log(contents);
});
