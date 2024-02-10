function next()
{window.location="game.html";
}
var a=0;
var num=0;
var tracker=0;
a=Math.floor(Math.random()*10);
console.log(a);
function check(){
++tracker;
console.log(a);
console.log(tracker);
num=document.getElementById("input").value;
if(num<a){
document.getElementById("result").innerHTML="Try a Bigger Number";}
if(num>a){
document.getElementById("result").innerHTML="Try a Smaller Number";}
if(num==a){
tracker=2;
document.getElementById("result").innerHTML="You Guessed The Number!!";
setTimeout(function() {
window.location="winner.html";}
, 2000);}
if(tracker==3){
document.getElementById("result").innerHTML="You Lose, The Number Was "+ a;
setTimeout(function() {
window.location="gameover.html";}
, 2000);
}}
function play()
{{window.location="index.html";
}}
