// text change
function textChange(){
  document.getElementById("h2").innerHTML="Hello World";
  document.getElementById("demo").innerHTML="Hello World";
}
function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
function preferedBrowser() {
  prefer = document.forms[0].browsers.value;
  alert("You prefer browsing internet with " + prefer);
}
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
function show_coords(event) {
  document.getElementById("demo").innerHTML = "X= " + event.clientX + "<br>Y= " + event.clientY;
}
