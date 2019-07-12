document.getElementById('userPassword').addEventListener('keydown', function(e){
	if(e.keyCode===13 && document.getElementById('userPassword').value!=''){
		userPassword();
	}
});

document.getElementById('confirmPass').addEventListener('click', userPassword);
document.getElementById('randomPass').addEventListener('click', randomPassword);
document.getElementById('playButt').addEventListener('click', musicPlay);
document.getElementById('pauseButt').addEventListener('click', musicPause);
document.getElementById('stopButt').addEventListener('click', musicStop);
document.getElementById('alphabet').addEventListener('click', function(e){
  if(e.target && e.target.matches("span.endButt")){
    resetApp();
  }
});
