//calculate area of rectangle

function rectangle(length, height){
this.length=length;
this.height=height;
}
rectangle.prototype.area=function(rectangle){
return	this.length * this.height;
// 	return d;
}
module.exports=rectangle;