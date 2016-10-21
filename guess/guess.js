$("#myForm").submit(function(event){
	event.preventDefault();

	var guessNum=guess();
// 		//variables

		var show =$("#showMsg");
		var myNum = $(this).find("input[name=myNum]");
		var newNum = parseInt(myNum.val());
		
		var fadeForm= $("#myForm").fadeOut(2000);

		
			//validate input//
				var message;
				if(newNum < guessNum){

					message =newNum  + " is too low. Try again";

				}
				else if(newNum > guessNum){

					message = newNum  + " is too high. Try again";

				}
				else if(isNaN(newNum)){

					message="Please enter a valid number";
				
				}
				else {
					fadeForm;
					message="You got it";

				}
		//display message
		var newMsg=$("<p></p>");
		newMsg.html(message);
		show.append(newMsg);


	});

		function guess(){
			var a= (Math.random()* 10);
			var b= Math.round(a);
			return b;
		}	
