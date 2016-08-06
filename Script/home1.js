

function forgot() {
 console.log("Please enter your email address");
var mail = window.prompt("enter email address to get new Password");

}

function login() {

var username = document.getElementById("loginEmail").value;
var passwd = document.getElementById("loginPassword").value;
var errormsg = "";

	if (username == "" && passwd == "") {
	
	console.log("jbishdobfrk");
	errormsg+="username and password can not be null";
	document.getElementById("errorMessage").innerHTML = errormsg;
	}
	
	else{
		
		document.getElementById("afterLogin").style.display = "block";
	    document.getElementById("signIn").style.display = "none";
   }
	
}
