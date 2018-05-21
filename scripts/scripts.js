function hideThenShow() {
  var myDiv = document.getElementById('content');
  console.log('Hiding content', myDiv);
  myDiv.hidden = true;
  myDiv.style.display = 'none';
  setInterval(function(){
    console.log('Showing content', myDiv);
    myDiv.hidden = false;
    myDiv.style.display = 'block';
  }, 1000);
}
