module.exports = function (userGuess, correctNumber){

	if(userGuess == correctNumber()){
		return {
			status:"GOOD",
			message:"You Got it"
		}
	}
	else if(userGuess > correctNumber()){
		return {
			status:"TOO_HIGH",
			message:"Number too high"
		}
	}	
		else if(userGuess < correctNumber()){
		return {
			status:"TOO_LOW",
			message:"Number too low"
		}
	}
	else if(isNaN(userGuess)){
		return {
			status:"NOT_A_NUMBER",
			message:"Input is not a number"
		}
	}
	else{
		return {
			status:"ERROR",
			message:"I didn't understand that"
		}

	}

}