var h=document.getElementById("hour");
var m=document.getElementById("mins");
var s= document.getElementById("secs");
var ms= document.getElementById("milli");
var ap= document.getElementById("ampm");
function digitalClock() {
	//get the time
		var now = new Date();
		var hours=now.getHours();
		var minutes=now.getMinutes();
		var seconds= now.getSeconds();
		var milli = now.getMilliseconds();
		var newMilli = Math.floor(milli / 10).toFixed(0);
		var amPm="";
		
		newHours = addZero(hours);
		minutes = addZero(minutes);
		//seconds = addZero(seconds);//fixed bug

		amPm = getAmPm(hours);

		//document.getElementById("time").innerHTML = newHours + " : " + minutes + " : " + seconds + " : " + newMilli + " " + amPm;
		h.innerHTML=newHours;
		m.innerHTML = minutes;
		s.innerHTML = seconds;
		ms.innerHTML = newMilli;
		ap.innerHTML = amPm;
		var myTime = setTimeout(function(){digitalClock()}, 001);
}

function getAmPm(hours){
		//amPM is PM if hours is greater than or equal to  12;
		if(hours >= 12)
			{
			amPm="PM"
			} 
		else if( hours < 12)
			{
			amPm="AM";
			}
			return amPm;
}

function addZero(x){
		// add zero if number is less than 10
		if (x < 10)
			{
			x ="0" + x;
			}
		else if(x > 12)
		{
			x =x - 12;
	
		}
		return x;		
}
