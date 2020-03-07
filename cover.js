var videoElement = document.getElementById ("introVideo");
var audioElement = document.getElementById ("bgm") = bgm;
function playVideo() {
	document.getElementById ("home").style.display ="none";
	document.getElementById ("cinema").style.display = "block";
	document.getElementById ("continue").style.display ="none";
	document.getElementById ("skip").style.display ="block";
	document.body.style.backgroundImage = "url('images/background/cover2.jpg')";
	bgm.pause();

	videoElement.play();
		videoElement.onended = function(){
			document.getElementById ("home").style.display ="none";
			document.getElementById ("cinema").style.display ="none";
			document.getElementById ("continue").style.display ="block";
			document.getElementById ("overlay").style.display ="block";
			document.getElementById ("skip").style.display ="none";
			bgm.play();

		}
}
function skip(){
	videoElement.pause();
	document.getElementById ("home").style.display ="none";
	document.getElementById ("cinema").style.display ="none";
	document.getElementById ("continue").style.display ="block";
	document.getElementById ("overlay").style.display ="block";
	document.getElementById ("skip").style.display ="none";
	bgm.play();

}
function guard() {
	document.getElementById ("character1").style.display ="block";
}
function noGuard() {
	document.getElementById ("character1").style.display ="none";
}
function detect() {
	document.getElementById ("character2").style.display ="block";
}
function noDetect() {
	document.getElementById ("character2").style.display ="none";
}
function suspect() {
	document.getElementById ("character3").style.display ="block";
}
function noSuspect() {
	document.getElementById ("character3").style.display ="none";
}