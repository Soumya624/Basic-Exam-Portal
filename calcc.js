const k = document.getElementById('cal');
const f = document.getElementById('content');
const l = document.getElementById('qllll');
const m = document.getElementById('ql');

function tog(){
  if ( k.innerText === "🞬") {
    k.innerText="☰";
    f.style.visibility="hidden";
  }
  else if ( k.innerText === "☰") {
    k.innerText ="🞬";
    f.style.visibility="visible";
  }
}
function togg(){
  if ( m.innerText === "🞬") {
    m.innerText="☰";
    l.style.display="none";
  }
  else if ( m.innerText === "☰") {
    m.innerText ="🞬";
    l.style.display="block";
  }
}


// else if ( k.innerText = "☰") {
//   k.innerText ="🞬";
// }
$(document).ready(function(){
   
  $('#content').load("./calculator.html");

});