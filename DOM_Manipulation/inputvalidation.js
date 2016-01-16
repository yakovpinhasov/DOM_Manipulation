
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if (username == ""){ /* checks if user name blank than alert to the user*/
	alert("Please Enter User Name");
	return false;
}
if ( password == "12345"){ /* Fixed Password*/
alert("Login successfully");
}
else  {
alert("wrong password");
}
}



