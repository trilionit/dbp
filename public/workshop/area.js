// var total;
 function area(){
	total=length * height;
}

 function rectangle(length, height){
 	this.length=length;
 	this.height=height;
 	// return total;
 }

rectangle.prototype.area = function(){
 	return 0;
 }