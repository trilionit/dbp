$("form#register").submit(function(e) {
	e.preventDefault();
	var	textBox= $(this).find("[type=text]");
	var fname= $(this).find("[name=fname]");
	var lname= $(this).find("[name=lname]");
	var	email= $(this).find("[type=email]");
	var id= $(this).find("id");
	var	tel= $(this).find("[type=tel]");
	var password= $(this).find("[type=password]");
	var cpw=$(this).find("[name=cpw]");
	var errMsg ="Important";
	var emailAddress = email.val();

//validate email
// http://stackoverflow.com/questions/2507030/email-validation-using-jquery

function validateEmail($email) {
 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2, 6})?$/;
  return emailReg.test( $email );
}
function checkCharacterString($text) {
 var textString = (/^[A-Za-z]*$/i);
  return textString.test( $text );
}

	//check required fields not empty
	if (textBox.val()==""){
		textBox.addClass("input-error");
		$(".form-element span").html(errMsg);
	}

	if(!checkCharacterString(fname.val()) || !checkCharacterString(lname.val())){
		textBox.addClass("input-error");
		errMsg="Enter a valid First Name or Last Name";
		id.html(errMsg);
	}

	if (email.val()==""){
		email.addClass("input-error");
		$(".full-element span").html(errMsg);
	}
	//validate email
	
	else if(!validateEmail(emailAddress)){
		email.addClass("input-error");
		errMsg="Enter a valid Email Address";
		$(".full-element span#email").html(errMsg);
	}


	if (tel.val()==""){
		tel.addClass("input-error");
		$(".full-element span").html(errMsg);
	}

	if (password.val()==""){
		password.addClass("input-error");
		$(".full-element span").html(errMsg);
	}
	//validate input characters
	if (fname.val().length < 2){
		fname.addClass("input-error");
		errMsg="Enter A valid First Name";
		$(".form-element span#fname").html(errMsg);

	}else if(lname.val().length < 2){
		lname.addClass("input-error");
		errMsg="Enter A valid Last Name";
		$(".form-element span#lname").html(errMsg);
	}

	

});
