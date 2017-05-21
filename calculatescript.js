$(document).ready(function() {
    // jQuery code goes here
    
  var button = document.getElementById('calculate');
  button.addEventListener('click', calculate);

});

function calculate() {
  var number1 = document.getElementById('nr1').value;
  var number2 = document.getElementById('nr2').value;
  var result = number1 * number2;
  document.getElementById('result').innerHTML=(result);
}

