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
var votemodal = document.getElementById('voteModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "images/relation/relation1.png";
    captionText.innerHTML = "My friend Sumner was murdered yesterday."+"<br>"+"And this morning these people decide to find the killer, and send the killer to cops."
    +"<br>"+"But indeed, I'm not familiar with these guys.";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}


var voteimg = document.getElementById("voteImg");
var votecaptionText = document.getElementById("votecaption");
var voteresult = document.getElementById("result");
voteimg.onclick = function(){
    votemodal.style.display ="block";
    voteresult.style.display="none";
    document.getElementById("img05").style.display = "none";
    votecaptionText.innerHTML = "Those people agreed on voting for one person to be sent to the police."+"<br>"+"Who should I vote for?"
}

function conti(){
    window.location.href='day1-3.html';
}

function result1(){
    voteresult.style.display="block";
    document.getElementById("img05").style.display = "block";
    document.getElementById("img02").style.display = "none";
    document.getElementById("img03").style.display = "none";
    votecaptionText.innerHTML = "In the end, we decided to sent Fiona to the police as she seemed most likely to be the criminal."
}

    




    



    

    




    

