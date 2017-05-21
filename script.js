// Code goes here

function stylize() {
  
  var btn = document.getElementById('stylize');
  btn.disabled= true;
  
  var a = document.createElement('a');
  a.setAttribute('href', 'http://www.google.com');
  a.innerHTML='A new link appears!';
  
  var element = document.getElementById('tag');
  element.appendChild(a);
  
  var block = document.querySelector('.block1');
  block.style.backgroundColor="grey";
  block.style.color="orange";
  
}
