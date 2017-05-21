$(document).ready(function() {
    // jQuery code goes here

  var query1Complete = document.getElementById('i1');
  query1Complete.addEventListener('input',addQuery2);
  
});

function addQuery2() {
  document.getElementById('l2').innerHTML='Write your last name:';
  document.getElementById('i2').hidden=false;
}

