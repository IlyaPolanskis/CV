//  resume.js
$(document).ready(function() {

	function Resume() {
	this.name = 'Илья Полянский';
	this.position = 'Программист/Студент';
	this.adress = 'Рига, Латвия';
	this.email = 'Ilya.Polanskis@gmail.com';
	this.phone = ' +371 28-22-49-58';
	this.university = 'Latvijas Juras akademija';
	this.last_work_expirence = null;

	// У меня привычка писать комментарии на английском, когда понял, что CV на русском то было уже поздно...
	this.skills = { // All data in percents
		"python" : 80,    // Favourite language. Especially I like it's Zen. Read Mark Lutz book and 
						  // did some practices with machine learning (Google Developers: Machine Learning on YouTube), 
						  // also participated in pythonchallenge.com,
						  // have some basic understanding about MVC model and Django framework.
						  // if there is a problem to solve I usually use python (3rd version)

		"c#": 65,    // Only got Unity3D experience, made some simple games with it, like Space Shooter, brick breaker, text quests,
					 // simple plants vs garden clone. And now I'm try to create my strategy game. 
					 // Best point about C# it is very OOP language. So as javascript.

		"javascript" : 45,    // I can't say JS is my favorite language. I only use it with web design tasks. Usually
							  // with JQuery library. Only when I started work with Django and web design problems I
							  // started to use JS as a very powerfull tool to manipulate HTML code.

		"html": 60,    // HTML and CSS is simple enough to understand. It's kinda art to use it. I like to call
		"css": 60,     // it "designing in the browser". You wrote some code - instantly check it in browser and so on.

		"mysql": 20,         // All are databases managers. But MySQL I only tried on PROGMEISTARS courses, 
		"sqlite": 40,        // but other two I tried to implement to my WebSite (which still isn't ready).
		"postgresql" :35,    // ---

		"c": 25, 			  // PROGMEISTARS courses. Thanks to those languages I understood the main  
		"pascal/delphi": 25,  // logic of programming. if-statements, loops, recursion, functions, classes, objects and so on...
		"java": 25,			  // ---

	}

}

	resume = new Resume();
	labels = [];
	skill_data = [];
	skills = resume.skills;

	for (skill in skills){
		labels.push(skill);
		skill_data.push(skills[skill]);
	}

	// Bar chart of skills using chart.js 
	//["Python", "C#", "JavaScript", "HTML", "CSS", "MySQL", "SQLite", "PostgreSQL", "C", "Pascal/Delphi"],


	// HTML place for chart
	var ctx = $("#myChart");

	// options for chart
	options = {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true,
	                    suggestedMax: 100
	                }
	            }]
	        }
	    }

	// data set
	var data = {
	    labels: labels,
	    datasets: [
	        {
	            label: "Навыки",
	            backgroundColor: "rgba(23,98,161,0.3)",
	            borderColor: "rgba(70,70,70,1)",
	            borderWidth: 0.6,
	            hoverBackgroundColor: "rgba(30,120,180,0.6)",
	            hoverBorderColor: "rgba(50,50,50,1)",
	            data: skill_data,
	        }
	    ]
	};

	// Chart initialization
	var mySkillsChart = new Chart(ctx, {
	    type: 'bar',
	    data: data,
	    options: options
	});


	// Filling the cv
	$('#name').html(resume.name);
	$('#position').html(resume.position);
	$('#adress').html(resume.adress);
	$('#email').html(resume.email);
	$('#phone').html(resume.phone);
	$('#university').html(resume.university);

	// Just for fun
	if(resume.last_work_expirence) {
		console.log('Я работал в Google/Yandex/Microsoft!')
	} else {
		$('#work_experience').html(" Отсутсвует");
	}


});

