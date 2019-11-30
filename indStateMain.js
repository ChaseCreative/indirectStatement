//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var answerOne = get("answerOne");
    var answerTwo = get("answerTwo");
    var answeThree = get("answerThree");
    var answerFour = get("answerFour");
    var responseButton = get("responseButton");
    var responseNext = get("responseNext");



//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "IS";}

function gameTitle() {get("startButton").innerHTML = "Let's Make A Statement!";}

function gameOneTitle() {return game1Title;}

function gameTwoTitle() {return game2Title;}

function gameThreeTitle(){return game3Title;}

function gameFourTitle(){return game4Title;}


//CHANGE THE NAMES OF THE GAMES HERE
  var game1Title = get("answerOne").innerHTML = "Indirectly Speaking!";
  var game2Title = get("answerTwo").innerHTML = "";
  var game3Title = get("answerThree").innerHTML = "";
  var game4Title = get("answerFour").innerHTML = "";



//This loads the names of the games

    appName();
    gameTitle();
    gameOneTitle();
    gameTwoTitle();
    gameThreeTitle();
    gameFourTitle();

    var nomPE1 = "a";
    var genPE1 = "ae";
    var datPE1 = "ae";
    var accPE1 = "am";
    var ablPE1 = "ā";
    var vocPE1 = "a";

    var nomPE1Pl = "ae";
    var genPE1Pl = "ārum";
    var datPE1Pl = "īs";
    var accPE1Pl = "ās";
    var ablPE1Pl = "īs";
    var vocPE1Pl = "ae";

    var nomPE2 = "us";
    var genPE2 = "ī";
    var datPE2 = "ō";
    var accPE2 = "um";
    var ablPE2 = "ō";
    var vocPE2 = "e";

    var nomPE2Pl = "ī";
    var genPE2Pl = "ōrum";
    var datPE2Pl = "īs";
    var accPE2Pl = "ōs";
    var ablP2Pl = "īs";
    var vocPE2Pl = "ī";

    var nomPE3 = "is";
    var genPE3 = "is";
    var datPE3 = "ī";
    var accPE3 = "em";
    var ablPE3 = "e";
    var vocPE3 = "is";

    var nomPE3Pl = "ēs";
    var genPE3Pl = "ium";
    var datPE3Pl = "ibus";
    var accPE3Pl = "ēs";
    var ablPE3Pl = "ibus";
    var vocPE3Pl = "ēs";



    		var pres1stSing = "ō";
    		var pres2ndSing = "ās";
    		var pres3rdSing = "at";
    		var pres1stPl = "āmus";
    		var pres2ndPl = "ātis";
    		var pres3rdPl = "ant";

        var pres1stSing2 = "eō";
    		var pres2ndSing2 = "ēs";
    		var pres3rdSing2 = "et";
    		var pres1stPl2 = "ēmus";
    		var pres2ndPl2 = "ētis";
    		var pres3rdPl2 = "ent";

        var pres1stSing3 = "ō";
    		var pres2ndSing3 = "is";
    		var pres3rdSing3 = "it";
    		var pres1stPl3 = "imus";
    		var pres2ndPl3 = "itis";
    		var pres3rdPl3 = "unt";

        var pres1stSing3iO = "iō";
    		var pres2ndSing3iO = "is";
    		var pres3rdSing3iO = "it";
    		var pres1stPl3iO = "imus";
    		var pres2ndPl3iO = "itis";
    		var pres3rdPl3iO = "iunt";

        var pres1stSing4 = "iō";
    		var pres2ndSing4 = "īs";
    		var pres3rdSing4 = "it";
    		var pres1stPl4 = "īmus";
    		var pres2ndPl4 = "ītis";
    		var pres3rdPl4 = "iunt";

    		var imp3rdSing = "ābat";
    		var imp3rdPl = "ābant";

    		var fut3rdSing = "ābit";
    		var fut3rdPl = "ābunt";

        var per3rdSing = "āvit";
    		var per3rdPl = "āvērunt";

        var perfect1stSing = "ī";
        var perfect2ndSing = "isti";
    		var perfect3rdSing = "it";
        var perfect1stPl = "imus";
        var perfect2ndPl = "istis";
    		var perfect3rdPl = "ērunt";

    		var pluPer3rdSing = "āverat";
    		var pluPer3rdPl = "āverant";

    		var futPer3rdSing = "āverit";
    		var futPer3rdPl = "āverint";




var answers = ["answerOne", "answerTwo", "answerThree", "answerFour"];



//Random index for Shuffle
	 var randomIndex = 0;



function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



//Score Variables

	var correctAnswer = "";

    var points = 0;

    var pointsPerCorrectAnswer = 10;

    //var gameOneChosen = false;


    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }

//Counter variable for number of questions

var num_questions = 5;
var count = 11;

function decrementCount(){
	count--;
}


//Timer variables
var timeleft = 25;
var countdown = setInterval(x,1000);


function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			resetAnswerColors();
    			answerOne.innerHTML = "";
				answerTwo.innerHTML = "";
				answerThree.innerHTML = "";
				answerFour.innerHTML = "";

  }

}




function stopTimer() {


	clearInterval(countdown);


}



//This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}



function answerSetup(){
		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";
		responseButton.innerHTML = "";
		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};
}



 function selectGame1(){

 	startButton.disabled = false;
 	startButton.onclick = function(){testIndirectStatement()};
  //responseButton.onclick = function(){hint()};
	startButton.innerHTML = "Click to Start " + game1Title;
    answerSetup();
    gameOverAudio();
 	return true;


}


function selectGame2(){

	startButton.disabled = false;
 	startButton.onclick = function(){testIndirectStatement()};
 	startButton.innerHTML = "Click to Start " + game2Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame3(){

	startButton.disabled = false;
 	startButton.onclick = function(){complexMixup()};
 	startButton.innerHTML = "Click to Start " + game3Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame4(){

	startButton.disabled = false;
 	startButton.onclick = function(){testIndirectStatement()};
 	startButton.innerHTML = "Click to Start " + game4Title;
    answerSetup();
    gameOverAudio();
 }



 var headyVerb = [["say","said", "dīc" + pE3[pEIndex], "dīx" + pT[pEIndex]],["think","thought", "put" + pE1[pEIndex], "putav" + pT[pEIndex]], ["see","saw", "vid" + pE2[pEIndex], "vīd" + pT[pEIndex]], ["feel","felt", "sent" + pE4[pEIndex], "sens" + pT[pEIndex]],["hear","heard", "aud" + pE4[pEIndex], "audiv" + pT[pEIndex]],["know","knew", "sc" + pE4[pEIndex], "scīv" + pT[pEIndex]]];

var hVIndex = Math.floor(Math.random() * headyVerb.length);

 var pronounHe = ["I","You","He does","We","You all", "They"];
 var pronounShe = ["I","You","She","We","You all", "They"];

 var subjectAccusativeMas = [["mercatorem", "the merchant"],["patrem","the father"],["agricolam", "the farmer"],["filium", "the son"],["nautam","the sailor"],["senem", "the old man"], ["servum","the servant"]];
var sAMasIndex = Math.floor(Math.random() * subjectAccusativeMas.length);

var subjectAccusativeFem = [["uxorem", "the wife"],["sororem","the sister"],["ancilam", "the maid servant"],["filiam", "the daughter"],["matrem", "the mother"],["feminam", "the woman"]];
var sAFemIndex = Math.floor(Math.random() * subjectAccusativeFem.length);

var verbInfinitive = [["is finding","has found","will find", "is found", "has been found","invenīre", "invenisse", "inventurum esse", "inveni", "inventum esse"],["is saving","has saved","will save", "is saved", "has been saved","servāre", "servavisse", "servaturum esse", "servari", "servatum esse"],["captures","captured","will capture", "is captured", "was captured","capere", "cēpisse", "capturum esse", "capi", "captum esse"],["loves","loved","will love", "is loved", "was loved","amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["wounds","wounded","will wound", "is wounded", "was wounded","vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];

var verbInfinitiveEng = [["is finding","has found","will find", "is found", "has been found","is finding","has found","will find", "is found", "has been found"],["is saving","has saved","will save", "is saved", "has been saved","is saving","has saved","will save", "is saved", "has been saved"],["captures","captured","will capture", "is captured", "was captured","captures","captured","will capture", "is captured", "was captured"],["loves","loved","will love", "is loved", "was loved","loves","loved","will love", "is loved", "was loved"],["wounds","wounded","will wound", "is wounded", "was wounded","wounds","wounded","will wound", "is wounded", "was wounded"]];



var verbInfinitivePast = [["was finding","had found","would find", "was being found", "had been found","invenīre", "invenisse", "inventurum esse", "inveni", "inventum esse"],["was saving","had saved","would save", "was being saved", "had been saved","servāre", "servavisse", "servaturum esse", "servari", "servatum esse"],["was capturing","had captured","would capture", "was being captured", "had been captured","capere", "cēpisse", "capturum esse", "capi", "captum esse"],["was loving","had loved","would love", "was being loved", "had been loved","amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["was wounding","had wounded","would wound", "was being wounded", "had been wounded","vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];
var verbInfinitiveEngPast = [["was finding","had found","would find", "was being found", "had been found","was finding","had found","would find", "was being found", "had been found"],["was saving","had saved","would save", "was being saved", "had been saved","was saving","had saved","would save", "was being saved", "had been saved"],["was capturing","had captured","would capture", "was being captured", "was capturing","had captured","would capture", "was being captured", "had been captured"],["was loving","had loved","would love", "was being loved", "had been loved","was loving","had loved","would love", "was being loved", "had been loved"],["was wounding","had wounded","would wound", "was being wounded", "had been wounded","was wounding","had wounded","would wound", "was being wounded", "had been wounded"]];

//var verbInfinitiveEng = [["loves","loved","will love", "is loved", "was loved"],["wounds","wounded","will wound", "is wounded", "was wounded"]];
//var verbInfinitiveLat = [["amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];


//var tenseIndex = [0.1,2,3,4,]
var verbInfIndex = Math.floor(Math.random() * verbInfinitive.length);

//var tenseIndex = ["0","1", "2", "3","4"]
var tenseIndex = Math.floor(Math.random() * 5);


 var sentence = headyVerb[hVIndex][2] + " " + subjectAccusativeMas[sAMasIndex][0] + " " + verbInfinitive[verbInfIndex][tenseIndex + 5];
 var correctAnswer = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex];
 var wrongAnswer1 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " WR1 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 1];
 var wrongAnswer2 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " WR2 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 2];
 var wrongAnswer3 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " WR3 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 3];


 var sentencePast = headyVerb[hVIndex][3] + " " + subjectAccusativeMas[sAMasIndex][0] + " " + verbInfinitivePast[verbInfIndex][tenseIndex + 5];
 var correctAnswerPast = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex];
 var wrongAnswer1Past = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " WR1 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 1];
 var wrongAnswer2Past = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " WR2 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 2];
 var wrongAnswer3Past = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " WR3 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 3];


var  checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];



  function testIndirectStatement(){

timeleft = 25;
responseButton.innerHTML = "";
//responseButton.onclick = function(){testIndirectStatement()};

    countDownTimer();

     countdown = setInterval(countDownTimer,1000);

     //shuffle(answers);


    startButton.disabled = true;



    //INDIRECT STATEMENT

     pE1 = [pres1stSing,pres2ndSing,pres3rdSing,pres1stPl,pres2ndPl,pres3rdPl];
     pE2 = [pres1stSing2,pres2ndSing2,pres3rdSing2,pres1stPl2,pres2ndPl2,pres3rdPl2];
     pE3 = [pres1stSing3,pres2ndSing3,pres3rdSing3,pres1stPl3,pres2ndPl3,pres3rdPl3];
     pE4 = [pres1stSing4,pres2ndSing4,pres3rdSing4,pres1stPl4,pres2ndPl4,pres3rdPl4];

     pT = [perfect1stSing,perfect2ndSing,perfect3rdSing,perfect1stPl,perfect2ndPl,perfect3rdPl];

     pEIndex = Math.floor(Math.random() * 6);

     headyVerb = [["say","said", "dīc" + pE3[pEIndex], "dīx" + pT[pEIndex]],["think","thought", "put" + pE1[pEIndex], "putav" + pT[pEIndex]], ["see","saw", "vid" + pE2[pEIndex], "vīd" + pT[pEIndex]], ["feel","felt", "sent" + pE4[pEIndex], "sens" + pT[pEIndex]],["hear","heard", "aud" + pE4[pEIndex], "audiv" + pT[pEIndex]],["know","knew", "sc" + pE4[pEIndex], "scīv" + pT[pEIndex]]];

    hVIndex = Math.floor(Math.random() * headyVerb.length);

     pronounHe = ["I","You","He does","We","You all", "They"];
     pronounShe = ["I","You","She","We","You all", "They"];

     subjectAccusativeMas = [["mercatorem", "the merchant"],["patrem","the father"],["agricolam", "the farmer"],["filium", "the son"],["nautam","the sailor"],["senem", "the old man"], ["servum","the servant"]];
    sAMasIndex = Math.floor(Math.random() * subjectAccusativeMas.length);

    subjectAccusativeFem = [["uxorem", "the wife"],["sororem","the sister"],["ancilam", "the maid servant"],["filiam", "the daughter"],["matrem", "the mother"],["feminam", "the woman"]];
    sAFemIndex = Math.floor(Math.random() * subjectAccusativeFem.length);

    verbInfinitive = [["is finding","has found","will find", "is found", "has been found","invenīre", "invenisse", "inventurum esse", "inveni", "inventum esse"],["is saving","has saved","will save", "is saved", "has been saved","servāre", "servavisse", "servaturum esse", "servari", "servatum esse"],["captures","captured","will capture", "is captured", "was captured","capere", "cēpisse", "capturum esse", "capi", "captum esse"],["loves","loved","will love", "is loved", "was loved","amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["wounds","wounded","will wound", "is wounded", "was wounded","vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];

    verbInfinitiveEng = [["is finding","has found","will find", "is found", "has been found","is finding","has found","will find", "is found", "has been found"],["is saving","has saved","will save", "is saved", "has been saved","is saving","has saved","will save", "is saved", "has been saved"],["captures","captured","will capture", "is captured", "was captured","captures","captured","will capture", "is captured", "was captured"],["loves","loved","will love", "is loved", "was loved","loves","loved","will love", "is loved", "was loved"],["wounds","wounded","will wound", "is wounded", "was wounded","wounds","wounded","will wound", "is wounded", "was wounded"]];



    verbInfinitivePast = [["was finding","had found","would find", "was being found", "had been found","invenīre", "invenisse", "inventurum esse", "inveni", "inventum esse"],["was saving","had saved","would save", "was being saved", "had been saved","servāre", "servavisse", "servaturum esse", "servari", "servatum esse"],["was capturing","had captured","would capture", "was being captured", "had been captured","capere", "cēpisse", "capturum esse", "capi", "captum esse"],["was loving","had loved","would love", "was being loved", "had been loved","amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["was wounding","had wounded","would wound", "was being wounded", "had been wounded","vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];
    verbInfinitiveEngPast = [["was finding","had found","would find", "was being found", "had been found","was finding","had found","would find", "was being found", "had been found"],["was saving","had saved","would save", "was being saved", "had been saved","was saving","had saved","would save", "was being saved", "had been saved"],["was capturing","had captured","would capture", "was being captured", "had been captured","was capturing","had captured","would capture", "was being captured", "had been captured"],["was loving","had loved","would love", "was being loved", "had been loved","was loving","had loved","would love", "was being loved", "had been loved"],["was wounding","had wounded","would wound", "was being wounded", "had been wounded","was wounding","had wounded","would wound", "was being wounded", "had been wounded"]];

   //var verbInfinitiveEng = [["loves","loved","will love", "is loved", "was loved"],["wounds","wounded","will wound", "is wounded", "was wounded"]];
   //var verbInfinitiveLat = [["amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];


   //var tenseIndex = [0.1,2,3,4,]
    verbInfIndex = Math.floor(Math.random() * verbInfinitive.length);

   //var tenseIndex = ["0","1", "2", "3","4"]
    tenseIndex = Math.floor(Math.random() * 5);

    ranISIndex = Math.floor(Math.random() * 2);

if (ranISIndex == 0){
     sentence = headyVerb[hVIndex][2] + " " + subjectAccusativeMas[sAMasIndex][0] + " " + verbInfinitive[verbInfIndex][tenseIndex + 5];
     correctAnswer = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex];
     wrongAnswer1 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 1];
     wrongAnswer2 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 2];
     wrongAnswer3 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 3];

checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
shuffle(checkAnswers);

} else {

     sentence = headyVerb[hVIndex][3] + " " + subjectAccusativeMas[sAMasIndex][0] + " " + verbInfinitivePast[verbInfIndex][tenseIndex + 5];
     correctAnswer = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex];
     wrongAnswer1 = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 1];
     wrongAnswer2 = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 2];
     wrongAnswer3 = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 3];

     checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
     shuffle(checkAnswers);

}


    //checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];






  startButton.innerHTML = sentence;

  document.getElementById(answers[0]).innerHTML = checkAnswers[0][0];

  document.getElementById(answers[1]).innerHTML = checkAnswers[1][0];

  document.getElementById(answers[2]).innerHTML =  checkAnswers[2][0];

  document.getElementById(answers[3]).innerHTML = checkAnswers[3][0];



    responseButton.disabled = false;



      resetAnswerColors();

      enableButtons();

        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";

        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }




    }




   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}




function enableButtons(){

	answerOne.disabled = false;
	answerTwo.disabled = false;
	answerThree.disabled = false;
	answerFour.disabled = false;

}

function disableButtons(){
		answerOne.disabled = true;
		answerTwo.disabled = true;
		answerThree.disabled = true;
		answerFour.disabled = true;
}









function clickedAnswerOne(){


	if (checkAnswers[0][1] == true){

    correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		//timeleft = 15;


    answerOne.style.backgroundColor = "yellow";
		answerOne.style.border = "yellow";
		document.getElementById("A1").style.backgroundColor = "yellow";


    answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
    document.getElementById("A2").style.backgroundColor = "black";

    answerThree.style.color = "red";
    answerThree.style.backgroundColor = "black";
    answerThree.style.border = "black";
    document.getElementById("A3").style.backgroundColor = "black";

    answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";

		responseButton.innerHTML = sentence;
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Optime!  Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerOneAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerOne.style.color = "red";
		answerOne.style.backgroundColor = "black";
		answerOne.style.border = "black";
		answerOne.disabled = true;
		document.getElementById("A1").style.backgroundColor = "black";


		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}


function clickedAnswerTwo(){



	if (checkAnswers[1][1] == true){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		//timeleft = 15;
		answerTwo.style.backgroundColor = "yellow";
		answerTwo.style.border = "yellow";
		document.getElementById("A2").style.backgroundColor = "yellow";

    answerOne.style.color = "red";
    answerOne.style.backgroundColor = "black";
    answerOne.style.border = "black";
    document.getElementById("A1").style.backgroundColor = "black";

    answerThree.style.color = "red";
    answerThree.style.backgroundColor = "black";
    answerThree.style.border = "black";
    document.getElementById("A3").style.backgroundColor = "black";

    answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";

		responseButton.innerHTML = sentence;
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Optime!  Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerTwoAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
		answerTwo.disabled = true;
		document.getElementById("A2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}
}

function clickedAnswerThree(){



	if (checkAnswers[2][1] == true){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		//timeleft = 15;
		answerThree.style.backgroundColor = "yellow";
		answerThree.style.border = "yellow";
		document.getElementById("A3").style.backgroundColor = "yellow";

    answerOne.style.color = "red";
    answerOne.style.backgroundColor = "black";
    answerOne.style.border = "black";
    document.getElementById("A1").style.backgroundColor = "black";

    answerTwo.style.color = "red";
    answerTwo.style.backgroundColor = "black";
    answerTwo.style.border = "black";
    document.getElementById("A2").style.backgroundColor = "black";

    answerFour.style.color = "red";
    answerFour.style.backgroundColor = "black";
    answerFour.style.border = "black";
    answerFour.disabled = true;
    document.getElementById("A4").style.backgroundColor = "black";


		responseButton.innerHTML = sentence;

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Optime!  Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerThreeAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerThree.style.color = "red";
		answerThree.style.backgroundColor = "black";
		answerThree.style.border = "black";
		answerThree.disabled = true;
		document.getElementById("A3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}



function clickedAnswerFour(){



	if (checkAnswers[3][1] == true){


		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio;
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		//responseButton.disabled = true;
		//timeleft = 15;
		answerFour.style.backgroundColor = "yellow";
		answerFour.style.border = "yellow";
		document.getElementById("A4").style.backgroundColor = "yellow";

    answerOne.style.color = "red";
    answerOne.style.backgroundColor = "black";
    answerOne.style.border = "black";
    document.getElementById("A1").style.backgroundColor = "black";

    answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
    document.getElementById("A2").style.backgroundColor = "black";

    answerThree.style.color = "red";
    answerThree.style.backgroundColor = "black";
    answerThree.style.border = "black";
    document.getElementById("A3").style.backgroundColor = "black";




		responseButton.innerHTML = sentence;

		responseButton.style.color = "yellow";

    responseButton.style.color = "yellow";
		startButton.innerHTML = "Optime!  Next Question!";
		startButton.disabled = false;


		unHideResponseNext();




	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerFourAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}
