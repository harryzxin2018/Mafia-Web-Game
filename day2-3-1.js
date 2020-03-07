function ap1() {
	document.getElementById ("text1").style.display = "block";
}

function disp1()  {
	document.getElementById ("text1").style.display = "none";	
}

function ap2() {
	document.getElementById ("text2").style.display = "block";
}

function disp2()  {
	document.getElementById ("text2").style.display = "none";	
}

function ap3() {
	document.getElementById ("text3").style.display = "block";
}

function disp3()  {
	document.getElementById ("text3").style.display = "none";	
}

function ap4() {
	document.getElementById ("text4").style.display = "block";
}

function disp4()  {
	document.getElementById ("text4").style.display = "none";	
}
var videoElement = document.getElementById ("video1");

function playVideo1() {
	document.getElementById ("video1").style.display = "block";
	document.getElementById ("home").style.display ="none";
	document.getElementById ("late").style.display = "none";
	document.getElementById ("skip").style.display ="block";
	document.getElementById ("overlay").style.display ="block";
    
    videoElement.src = "video/nighttalk4.mp4";
	videoElement.play();
		videoElement.onended = function(){
			document.getElementById ("video1").style.display = "none";
			document.getElementById ("home").style.display ="block";
			document.getElementById ("late").style.display ="block";		
			document.getElementById ("overlay").style.display ="none";
			document.getElementById ("skip").style.display ="none";

		}
}
function playVideo2 () {
	document.getElementById ("video1").style.display = "block";
	document.getElementById ("home").style.display ="none";
	document.getElementById ("late").style.display = "none";
	document.getElementById ("skip").style.display ="block";
	document.getElementById ("overlay").style.display ="block";
    
    videoElement.src = "video/nighttalk4.mp4";
	videoElement.play();
		videoElement.onended = function(){
			document.getElementById ("video1").style.display = "none";
			document.getElementById ("home").style.display ="block";
			document.getElementById ("late").style.display ="block";		
			document.getElementById ("overlay").style.display ="none";
			document.getElementById ("skip").style.display ="none";

		}
}
function playVideo3 () {
	document.getElementById ("video1").style.display = "block";
	document.getElementById ("home").style.display ="none";
	document.getElementById ("late").style.display = "none";
	document.getElementById ("skip").style.display ="block";
	document.getElementById ("overlay").style.display ="block";
    
    videoElement.src = "video/nighttalk4.mp4";
	videoElement.play();
		videoElement.onended = function(){
			document.getElementById ("video1").style.display = "none";
			document.getElementById ("home").style.display ="block";
			document.getElementById ("late").style.display ="block";		
			document.getElementById ("overlay").style.display ="none";
			document.getElementById ("skip").style.display ="none";

		}
}

function playVideo4 () {
	document.getElementById ("video1").style.display = "block";
	document.getElementById ("home").style.display ="none";
	document.getElementById ("late").style.display = "none";
	document.getElementById ("skip").style.display ="block";
	document.getElementById ("overlay").style.display ="block";
    
    videoElement.src = "video/nighttalk2.mp4";
	videoElement.play();
		videoElement.onended = function(){
			document.getElementById ("video1").style.display = "none";
			document.getElementById ("home").style.display ="block";
			document.getElementById ("late").style.display ="block";		
			document.getElementById ("overlay").style.display ="none";
			document.getElementById ("skip").style.display ="none";
            
		}
}


function skip(){
	videoElement.pause();
	document.getElementById ("home").style.display ="block";
	document.getElementById ("video1").style.display = "none";
	document.getElementById ("late").style.display ="block";	
	document.getElementById ("overlay").style.display ="none";
	document.getElementById ("skip").style.display ="none";

}