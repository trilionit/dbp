$(function(){
//for clean coding use functions as shown below //best practices

var getCssClassFromStatus = function(status) {
	/*switch method*/
	// var cssClass=;
	// 	switch (response.status){
	// 		case "GOOD":
	// 			cssClass="success";
	// 		break;
	// 		case "TOO_HIGH":
	// 		case "TOO_LOW":
	// 		case "NOT_A_NUMBER":
	// 			cssClass="wrong";
	// 		break;
	// 		case "ERROR":
	// 			cssClass="error";
	// 	}	
	/*Object method*/
	var statusClasses ={
		"GOOD": "success",
		"TOO_HIGH": "wrong",
		"TOO_LOW": "wrong",
		"NOT_A_NUMBER": "wrong",
		"ERROR": "error"
	}
	return statusClasses[status];

}
	$("#guessForm input[name=number]").keyup(function (event) {

		console.log("changed "+ event.target.value );
	})

	$("#guessForm").submit(function(event){

		event.preventDefault();

		var form = event.target; //event is the submit target is the button
		var url = form.action;

		//var formData =$(this).serialize(); //generates all the input values from the form
		var inputNumber = $(this).find("input[name=number]");

		var inputValue = inputNumber.val();

		if(inputValue === "" || isNaN(inputValue)){
		 alert("You need to input A Number");
		 return;
		}

		console.log(inputValue);

		var requestData = {number: inputValue}
		
		$.get(url, requestData, function(response) {
			var cssClass = getCssClassFromStatus(response.status);
			console.log(response.message)
			$("#message")
			.text(response.message)
			//.prop("class", "")// to remove existing class
			.removeClass("success")
			.removeClass("wrong")
			.removeClass("error")
			.addClass(cssClass);



		})
	})

});