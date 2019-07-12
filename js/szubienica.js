var yes= new Audio("audio/yes.wav");
var no=new Audio("audio/no.wav");
var britney=new Audio("audio/pixies.mp3");

var passwords=new Array(4);
passwords=["BEZ PRACY NIE MA KOŁACZY", "U MNIE DZIAŁA", "DO TRZECH RAZY SZTUKA", "DOBRE POMARAŃCZOWE"];
var password='';
var hiddenPassword;
var failedCheck=0;
var passwordLength;


var polishAlphabet=new Array(35);
polishAlphabet=("AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ");

function resetApp(){
	hiddenPassword="";
	passwordRefresh();
	document.getElementById('gibbet').innerHTML='';
	document.getElementById('alphabet').innerHTML='';
}

function hidePassword(){
	hiddenPassword="";
	passwordLength=password.length;
	for(i=0;i<passwordLength;i++){
		if(password.charAt(i)==" "){
			hiddenPassword=hiddenPassword+" ";
		}
		else{
			hiddenPassword=hiddenPassword + "-";
		}
	}
}

function passwordRefresh(){

	 document.getElementById("keyword").innerHTML=hiddenPassword;
}

function characterGen(){

	var alphabetTab="";
	failedCheck=0;
	for(i=0;i<35;i++){
		var number="number"+i;
		if(i % 7 ==0){
			alphabetTab=alphabetTab+'<div class="character" onclick="check('+i+')" id= "'+number+'" style="clear: both;">'+polishAlphabet[i]+'</div>';
		}
		else
		alphabetTab= alphabetTab +'<div class="character" onclick="check('+i+')" id= "'+number+'">'+polishAlphabet[i]+'</div>';
	}

	document.getElementById("alphabet").innerHTML=alphabetTab;


}

String.prototype.setChar = function(start, character){
	if(this.length-1<start){
		return this.toString();
	}
	else{
		return this.substr(0, start)+character+this.substr(start+1);
	}
}

function check(number){

	var checked = false;

	for(i=0;i<passwordLength;i++){
		if(password.charAt(i)==polishAlphabet[number]){
			hiddenPassword=hiddenPassword.setChar(i,polishAlphabet[number]);
			checked=true;
		}
	}
	if(checked==true){
		document.getElementById("number"+number).style.background = "#002200";
		document.getElementById("number"+number).style.color = "#00C000";
		document.getElementById("number"+number).style.border = "3px solid #00C000";
		document.getElementById("number"+number).style.cursor = "default";
		passwordRefresh();
		yes.play();
		if(password==hiddenPassword)gameOverVictory();
	}
	else{
		document.getElementById("number"+number).style.background = "#330000";
		document.getElementById("number"+number).style.color = "#CC0000";
		document.getElementById("number"+number).style.border = "3px solid #CC0000";
		document.getElementById("number"+number).style.cursor = "default";
		document.getElementById("number"+number).setAttribute("onclick",";");
		failedCheck++;
		no.play();
		gibbetUpdate(failedCheck);
	}

}

function gibbetUpdate(temp){
	if(temp<9){
		document.getElementById("gibbet").innerHTML='<img src="img/s'+temp+'.jpg" />';
	}
	else{
		document.getElementById("gibbet").innerHTML='<img src="img/s'+temp+'.jpg" />'
		gameOverDefeat();
	}
}

function gameOverDefeat(){
	document.getElementById("alphabet").innerHTML='Niestety, nie odgadłeś hasła. </br></br> <span class="endButt" id="spanDefeat">SPRÓBUJ PONOWNIE</span>';
}

function gameOverVictory(){
	document.getElementById("alphabet").innerHTML='Gratulacje, udało Ci się odgadnąć hasło. </br></br><span class="endButt" id="spanVictory">ZAGRAJ PONOWNIE</span>';

}


function userPassword(){
	password=document.getElementById('userPassword').value.toUpperCase().toString();
	if(password){
		resetApp();
		document.getElementById('userPassword').value='';
		hidePassword();
		passwordRefresh();
		gibbetUpdate(0);
		characterGen();
	}
}
 
function musicPlay(){
	britney.play();
}

function musicPause(){
	britney.pause();
}

function musicStop(){
	britney.pause();
	britney.currentTime=0;
}

function randomPassword(){
	var random=Math.floor(Math.random() * (4-1)+1);
	password = passwords[random].toString();
	resetApp();
	gibbetUpdate(0);
	hidePassword();
	passwordRefresh();
	characterGen();
}
