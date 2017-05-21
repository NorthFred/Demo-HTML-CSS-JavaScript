$(document).ready(function() {
    // jQuery code goes here

  var button2 = document.getElementById('btn2');
  button2.onclick = hallooo;
  
  var button3 = document.getElementById('btn3');
  button3.addEventListener('click', hallooo);
  
  var button4 = document.getElementById('btn4');
  button4.addEventListener('mouseover', hallooo);
  
});

function hello() {
  alert("Hellooooo!");
}

function hallooo(event) {
  event.preventDefault();
  alert("Hellooooo!");
}

