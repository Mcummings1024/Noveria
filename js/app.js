var app = angular.module('noveriaApp', ['ui.router']);
	
app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'http://mcummings1024.github.io/Noveria/home.html',
		controller: 'HomeController'
	})
	.state('facts', {
		url: '/facts',
		templateUrl: 'facts.html',
		controller: 'FactsController'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'about.html',
		controller: 'AboutController'
	})
	.state('quiz', {
		url: '/quiz',
		templateUrl: 'quiz.html',
		controller: 'QuizController',
		controllerAs: 'quiz'
	})
	.state('join', {
		url: '/join',
		templateUrl: 'join.html',
		controller: 'JoinController'
	});
	
	$urlRouterProvider.otherwise('/');
});

app.controller('HomeController', function () {
	var self = this;

	self.currentYear = (new Date()).getFullYear();

	self.navClicked = function (button) {
		if (button === "home") {
			$("#homeBtn").addClass("clicked");
			$("#factsBtn").removeClass("clicked");
			$("#aboutBtn").removeClass("clicked");
			$("#quizBtn").removeClass("clicked");
			$("#joinBtn").removeClass("clicked");
		} else if (button === "facts") {
			$("#homeBtn").removeClass("clicked");
			$("#factsBtn").addClass("clicked");
			$("#aboutBtn").removeClass("clicked");
			$("#quizBtn").removeClass("clicked");
			$("#joinBtn").removeClass("clicked");
		} else if (button === "about") {
			$("#homeBtn").removeClass("clicked");
			$("#factsBtn").removeClass("clicked");
			$("#aboutBtn").addClass("clicked");
			$("#quizBtn").removeClass("clicked");
			$("#joinBtn").removeClass("clicked");
		} else if (button === "quiz") {
			$("#homeBtn").removeClass("clicked");
			$("#factsBtn").removeClass("clicked");
			$("#aboutBtn").removeClass("clicked");
			$("#quizBtn").addClass("clicked");
			$("#joinBtn").removeClass("clicked");
		} else {
			$("#homeBtn").removeClass("clicked");
			$("#factsBtn").removeClass("clicked");
			$("#aboutBtn").removeClass("clicked");
			$("#quizBtn").removeClass("clicked");
			$("#joinBtn").addClass("clicked");
		}
	};
});

app.controller('FactsController', function () {});

app.controller('AboutController', function () {});

app.controller('QuizController', function ($scope) {
	var self = $scope;

	self.questions = [
		{ 'question': "Abortion should be legal in cases of rape, incest, socioeconomic condition, or risk of maternal health.", 'direction': -1, 'axis': 's', 'choice': 0 },
		{ 'question': "Women who have illegal abortions should be punished.", 'direction': 1, 'axis': 's', 'choice': 0 },
		{ 'question': "Recreational drugs such as cannabis should be legalized or decriminalized.", 'direction': -1, 'axis': 's', 'choice': 0 },
		{ 'question': "Drug dealers/traffickers should receive mandatory minimum prison sentences.", 'direction': 1, 'axis': 's', 'choice': 0 },
		{ 'question': "Speech which is critical of the government should be restricted.", 'direction': 1, 'axis': 's', 'choice': 0 },
		{ 'question': "Pornography depicting anything other than underage people should be legal.", 'direction': -1, 'axis': 's', 'choice': 0 },
		{ 'question': "People have a right to bear arms.", 'direction': -1, 'axis': 's', 'choice': 0 },
		{ 'question': "The government should require background checks and registration for all firearm purchases.", 'direction': 1, 'axis': 's', 'choice': 0 },
		{ 'question': "Any two consenting adults should be allowed to marry.", 'direction': -1, 'axis': 's', 'choice': 0 },
		{ 'question': "Adoption by same-sex couples should be illegal.", 'direction': 1, 'axis': 's', 'choice': 0 },
		{ 'question': "The military should intervene in other countries as necessary, to further our national goals.", 'direction': 1, 'axis': 's', 'choice': 0 },
		{ 'question': "The military draft/conscription should be abolished.", 'direction': -1, 'axis': 's', 'choice': 0 },
		{ 'question': "Universities should be required to admit a certain proportion of minorities.", 'direction': 1, 'axis': 's', 'choice': 0 },
		{ 'question': "Private associations should be able to exclude people based on race, sexual orientation, gender identity, and/or religion.", 'direction': -1, 'axis': 's', 'choice': 0 },
		{ 'question': "Assisted suicide should be allowed in cases of terminal illness.", 'direction': -1, 'axis': 's', 'choice': 0 },
		{ 'question': "Doctors who perform assisted suicide should be charged with first-degree murder.", 'direction': 1, 'axis': 's', 'choice': 0 },
		{ 'question': "People have a right to privacy, which includes protection from unwarranted searches.", 'direction': -1, 'axis': 's', 'choice': 0 },
		{ 'question': "Government should increase surveillance of civilians to defend against terrorist threats.", 'direction': 1, 'axis': 's', 'choice': 0 },
		{ 'question': "The government should provide free healthcare to all citizens.", 'direction': -1, 'axis': 'e', 'choice': 0 },
		{ 'question': "Citizens should not be forced to pay for healthcare/health insurance.", 'direction': 1, 'axis': 'e', 'choice': 0 },
		{ 'question': "Taxes should be progressive, or based on income level, if possible.", 'direction': -1, 'axis': 'e', 'choice': 0 },
		{ 'question': "Government budgets should be balanced by curbing expenditure and not by raising taxes.", 'direction': 1, 'axis': 'e', 'choice': 0 },
		{ 'question': "A carbon tax should be implemented in order to incentivize a shift toward renewable energy.", 'direction': -1, 'axis': 'e', 'choice': 0 },
		{ 'question': "Environmental advocacy and social pressure are better at changing public behavior than government regulation.", 'direction': 1, 'axis': 'e', 'choice': 0 },
		{ 'question': "Anyone whose wages do not cover living expenses should be automatically eligible to receive welfare.", 'direction': -1, 'axis': 'e', 'choice': 0 },
		{ 'question': "Welfare recipients should be drug tested.", 'direction': 1, 'axis': 'e', 'choice': 0 },
		{ 'question': "Employees should have the right to work without being forced to join a union or pay union dues.", 'direction': 1, 'axis': 'e', 'choice': 0 },
		{ 'question': "People who work more than 40 hours per week should be entitled to overtime pay.", 'direction': -1, 'axis': 'e', 'choice': 0 },
		{ 'question': "The government should avoid burdening international trade with tariffs or restrictions.", 'direction': 1, 'axis': 'e', 'choice': 0 },
		{ 'question': "Importing cheaper products from foreign countries undermines our domestic workforce.", 'direction': -1, 'axis': 'e', 'choice': 0 },
		{ 'question': "Quantitative Easing by a publicly owned central bank is ideal for mitigating economic downturns.", 'direction': -1, 'axis': 'e', 'choice': 0 },
		{ 'question': "Leaving the gold standard was a mistake, and fiat currency will result in harmful inflation.", 'direction': 1, 'axis': 'e', 'choice': 0 },
		{ 'question': "Privatizing the school system will result in greater choice and higher quality education.", 'direction': 1, 'axis': 'e', 'choice': 0 },
		{ 'question': "The government should provide a college education to every citizen.", 'direction': -1, 'axis': 'e', 'choice': 0 },
		{ 'question': "The government should bail out businesses to prevent them from failing.", 'direction': -1, 'axis': 'e', 'choice': 0 },
		{ 'question': "Regulations on businesses generally do more harm than good.", 'direction': 1, 'axis': 'e', 'choice': 0 }
	];
	
	self.index = 0;
	self.score = [0, 0];
	
	self.next = function () {
		if (self.index < self.questions.length - 1) {
			var prevChoiceBtn = '#choice' + self.questions[self.index].choice;

			self.index++;
			
			$(prevChoiceBtn).removeClass('active');
			$('#choice' + self.questions[self.index].choice).addClass('active');
		} else if (self.index === self.questions.length - 1) {
			self.index++;
		}
	};

	self.prev = function () {
		if (self.index !== 0) {
			if (self.index < self.questions.length - 1) {
				var prevChoiceBtn = '#choice' + self.questions[self.index].choice;
			
				self.index--;
				$(prevChoiceBtn).removeClass('active');
				$('#choice' + self.questions[self.index].choice).addClass('active');
			} else {
				self.index--;
			}
		}
	};

	self.setScore = function (value) {
		self.questions[self.index].choice = value;
	};

	self.total = function () {
		self.questions.forEach(function(question) {
			if (question.axis === 'e') {
				self.score[0] += question.direction * question.choice;
			}
			else {
				self.score[1] += question.direction * question.choice;
			}
		});

		self.showScore = true;
		drawChart();
	};

	var drawChart = function () {
		$('canvas').show();
		
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		
		canvas.width = 500;
		canvas.height = 500;
		ctx.fillStyle = 'rgb(154, 154, 154)';
		
		for (var x = 25; x < 500; x += 25) { ctx.fillRect(x, 0, 1, 500); }
		for (var y = 25; y < 500; y += 25) { ctx.fillRect(0, y, 500, 1); }
		
		ctx.fillStyle = 'rgb(50, 50, 50)';
		ctx.fillRect(0, 249, 500, 3);
		ctx.fillRect(249, 0, 3, 500);
		ctx.arc(self.score[0] + 250, self.score[1] + 250, 10, 0, 2 * Math.PI);
		ctx.fill();
	};

	self.reset = function () {
		self.index = 0;
		self.showScore = false;
		$('canvas').hide();
		$('canvas').height(0);
	};
});

app.controller('JoinController', function ($scope) {
	$scope.message = "join";
	$scope.sendMail = function () {
		var link = "mailto:noverianfederation@gmail.com" + 
		    	   "&subject=" + escape("New Citizen Request") + 
		    	   "&body=" + escape($scope.user.name + " (" + $scope.user.email + ") from " + $scope.user.location + 
			   " wishes to become a citizen of Noveria. " + $scope.user.name + " also belongs to " + $scope.user.micros + ".");
		console.log("test test");
    		window.location.href = link;
	};
});

app.controller('WhoopsController', function () {});

$(document).ready(function () {
    $state.go('home');
});
