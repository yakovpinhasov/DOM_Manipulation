// Function that checks whether input text is an alphabetic character or a number.

function keyDown(){
	var key = event.keyCode;
	if (key > 47 && key < 65){
			document.getElementById("results").innerHTML = "NUMBER";
	}else{
			document.getElementById("results").innerHTML = " LETTER";
	}
}
