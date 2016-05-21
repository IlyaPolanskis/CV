function submitAnswers() {
	var total = 5;
	var score = 0;
	var user_input = new Array();

	

	// Validation also can be eval(), but eval == evil
	for(i = 1; i <= total; i++){
		if (!document.forms["quizForm"]["question_"+i.toString()].value){
			alert("You forgot about question "+i.toString());
			return false;
		}
		else {
			// Get users input
			user_input[i-1] = document.forms["quizForm"]["question_"+i.toString()].value;
		}
	}

	// Set of correct answers
	var answers = ["b","a","b","d","c"];

	// Check the answers
	for (i = 0; i < total; i++) {
		if (user_input[i] == answers [i]) {
			score++;
		}
	}

	// Tell the user it's score
	alert("You have " + score + "/5");

}
