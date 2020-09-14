function check(){
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var correct=0;

var message = ["good you have done it" ,"you need to try better", "you loose"];
var picture=  ["sucess.gif","less.gif","loose.gif"];
var range;

if(correct<2){
	range=2;
}
if (correct>2){
	range=1;
}

if(q1=="amaravathi"){
	correct++;
}
if(q2=="narendra modi"){
	correct++;
}
if(q3=="prahalad"){
	correct++;
}
if(q4=="madhu"){
	correct++;
}
if(q5=="kedarnath"){
	correct++;
}
document.getElementById("aftersubmit").style.visibility="visible"
document.getElementById("message").innerHTML=message[range];
document.getElementById("number").innerHTML="you got"+correct+"correct"

document.getElementById("picture").src=picture[range];
}