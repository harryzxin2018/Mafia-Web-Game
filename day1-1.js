var audioTalk = document.getElementById ("talk");
function appear1 () {
	document.getElementById ("overlay").style.display = "block";
	document.getElementById ("H-Harry").style.display = "block";
    document.getElementById ("C-Harry").style.display = "block";
    audioTalk.src ="audio/harry.m4a";
    audioTalk.play();

}

function appear2 (){
	document.getElementById("overlay").style.display = "block";
	document.getElementById ("H-Carl").style.display = "block";
    document.getElementById ("C-Carl").style.display = "block";
    audioTalk.src ="audio/carl.m4a";
    audioTalk.play();
    
}
function appear3 (){
	document.getElementById ("overlay").style.display = "block";
	document.getElementById ("H-Ethan").style.display = "block";
    document.getElementById ("C-Ethan").style.display = "block";
    audioTalk.src ="audio/ethan.m4a";
    audioTalk.play();
}
function appear4 (){
	document.getElementById("overlay").style.display = "block";
	document.getElementById ("H-Amy").style.display = "block";
    document.getElementById ("C-Amy").style.display = "block";
    audioTalk.src ="audio/amy.m4a";
    audioTalk.play();
}
function appear5 (){
	document.getElementById("overlay").style.display = "block";
	document.getElementById ("H-Fiona").style.display = "block";
    document.getElementById ("C-Fiona").style.display = "block";
    audioTalk.src ="audio/fiona.m4a";
    audioTalk.play();
}
function appear6 (){
	document.getElementById("overlay").style.display = "block";
	document.getElementById ("H-Echo").style.display = "block";
    document.getElementById ("C-Echo").style.display = "block";
    audioTalk.src ="audio/echo.m4a";
    audioTalk.play();
}
function appear7 (){
	document.getElementById("overlay").style.display = "block";
	document.getElementById ("H-Sophie").style.display = "block";
    document.getElementById ("C-Sophie").style.display = "block";
    audioTalk.src ="audio/sophie.m4a";
    audioTalk.play();
    
}
function appear8 (){
	document.getElementById("overlay").style.display = "block";
	document.getElementById ("H-Tommy").style.display = "block";
    document.getElementById ("C-Tommy").style.display = "block";
    audioTalk.src ="audio/tommy.m4a";
    audioTalk.play();
}
    

function off () {
	document.getElementById("overlay").style.display = "none";
	document.getElementById ("H-Harry").style.display = "none";
    document.getElementById ("C-Harry").style.display = "none";
    document.getElementById ("H-Carl").style.display = "none";
    document.getElementById ("C-Carl").style.display = "none";
    document.getElementById ("H-Ethan").style.display = "none";
    document.getElementById ("C-Ethan").style.display = "none";
    document.getElementById ("H-Amy").style.display = "none";
    document.getElementById ("C-Amy").style.display = "none";
    document.getElementById ("H-Fiona").style.display = "none";
    document.getElementById ("C-Fiona").style.display = "none";
    document.getElementById ("H-Echo").style.display = "none";
    document.getElementById ("C-Echo").style.display = "none";
    document.getElementById ("H-Sophie").style.display = "none";
    document.getElementById ("C-Sophie").style.display = "none";
    document.getElementById ("H-Tommy").style.display = "none";
    document.getElementById ("C-Tommy").style.display = "none";

}
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "images/relation/relation1.png";
    captionText.innerHTML = "<br>"+"My friend Sumner has already been murdered by the time I came."+"<br>"+
    "And it's clear the criminal is among those people."+"<br>"+
    "I feel like doing something for Sumner. I should stay.";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

    

    




    

