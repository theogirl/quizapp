$(document).ready (function() {

//--Keep questions hidden to start--//
$('.question-box').hide();
$('.answer-box').hide();
$('.score-box').hide();
$('.restart-btn').hide();


//---Declare global variables---//

var score = 0;

var logos = ['q1.png', 'q2.png', 'q3.png', 'q4.png', 'q5.png', 'q6.png', 'q7.png', 'q8.png', 'q9.png', 'q10.png', 'q11.png', 'q12.png', 'q13.png', 'q14.png', 'q15.png' ];

var answers = [
	[['Bootstrap', 'EmberJS', 'CSS3', 'HTML5'], 'CSS3'], //[0]
	[['Git', 'Gimp', 'Gulp', 'GitHub'], 'GitHub'], //[1]
	[['AngularJS', 'Apache', 'Axure', 'Acrobat'], 'AngularJS'],//[2]
	[['Workbox', 'StackOverflow', 'Tracker', 'Codepen'], 'StackOverflow'],//[3]
	[['BoarJS', 'Grunt', 'Roar', 'Bower'], 'Grunt'],//[4]
	[['Codepen', 'Dropbox', 'JSHint', 'Jade'], 'Codepen'],//[5]
	[['Emerald', 'GemJS', 'Ruby on Rails', 'Ruby'], 'Ruby'],//[6]
	[['Joomla', 'JSFiddle', 'jQuery', 'Java'], 'jQuery'],//[7]
	[['Behance', 'Breaking Bad', 'Bootstrap', 'Bower'], 'Bootstrap'],//[8]
	[['GitHub', 'Git', 'Treehouse', 'Gimp'], 'Git'],//[9]
	[['CoffeeScript', 'CoffeeCup', 'JavaScript', 'Java'], 'Java'],//[10]
	[['Evernote', 'MAMP', 'XAMPP', 'Flinto'], 'MAMP'],//[11]
	[['SublimeText', 'Sass', 'Solidify', 'Slideshare'], 'SublimeText'],//[12]
	[['Brackets', 'Swift', 'BackboneJS', 'NodeJS'], 'BackboneJS'],//[13]
	[['HTML5', 'SublimeText', 'Sass', 'HandlebarsJS'], 'Sass']//[14]
];

var i = 0; // this will act as a counter to loop through quiz questions


//--EVENTS to listen for---//

$('.btn-start').click(function() { // clicks on start quiz button
	$('.question-box').show();
	$('.answer-box').show();
	$('.restart-btn').show();
	$('.intro').hide();
	$(this).hide();
	askQuestion();
	})

$('input').change(function() { // clicks on one of the answers
	var userAnswer = $('input[name="answer"]:checked').next().text();
	checkAnswer(userAnswer);
})

$('.btn-next').click(function() { // clicks on 'next question' button
	resetQuiz();
	askQuestion();
})

$('.restart-btn').click(function() { //clicks on 'restart quiz' button
	score = 0;
	resetQuiz();
	i = 0;
	$('.score-box').hide();
	$('.question-box').show();
	$('.answer-box').show();
	askQuestion();   

})


//---FUNCTION Declarations---//

function loadImage() {
	$('.logo').html('<img src="images/' + logos[i] + '"/>');
}

function loadAnswers() {
	$('.answer1').append('<label for="a1">'+ (answers[i][0][0])+'</label>');
	$('.answer2').append('<label for="a2">'+ (answers[i][0][1])+'</label>');
	$('.answer3').append('<label for="a3">'+ (answers[i][0][2])+'</label>');
	$('.answer4').append('<label for="a4">'+ (answers[i][0][3])+'</label>');
}

function checkAnswer(userAnswer) {
	if (userAnswer == answers[i][1]) { // if answer correct
		$('.feedback').css('background-color', '#21cf0f').text('AWESOME!');
		$('input[name="answer"]').attr("disabled", true);
		score++;

	}
	else { // if answer incorrect
		$('.feedback').css('background-color', '#f20b52').text('NOPE!');
		$('input[name="answer"]').attr("disabled", true);

	}
}

function askQuestion() {

	if (i < answers.length) {
		loadImage(i);
		loadAnswers(i);
		$('.progress').text('---{ ' + (i+1) + ' of 15' + ' }---');
	}
	else { //this is what happens when all questions have been asked and quiz is over
		$('.answer-box').hide();
		$('.intro').hide();
		$('.progress').hide();
		$('.score-box').show();
		$('.score').text(score + ' / 15');
		showResult();
	}
}


function resetQuiz() {
	i++;
	$('input[name="answer"]').attr("disabled", false);
	$('input[name="answer"]').attr("checked", false);
	$('.logo').empty();
	$('.progress').show();
	$('.answer-list li label').remove();
	$('.feedback').text('').css('background-color', 'transparent');
}
function showResult() {
	if (score >= 12) {
		$('.logo').html('<img src="images/level1.png" />');
	}
	else if (score >=9) {
		$('.logo').html('<img src="images/level2.png" />');
	}
	else {
		$('.logo').html('<img src="images/level3.png" />');
	}
}



}) // end document ready