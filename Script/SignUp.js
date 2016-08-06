function create()
{

var firstname = document.getElementById("firstName").value;
var lastname = document.getElementById("lastName").value;
var Username = document.getElementById("username").value;
  var mailID = document.getElementById("email").value;
  var password = document.getElementById("Password").value;
  var confirmPassword = document.getElementById("ConfirmPassword").value; 
  var phoneNumber = document.getElementById("number").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var passw=  /^[A-Za-z]\w{7,14}$/; 
  var errorMessage = "";
  
  
  
	 if(firstname == "" || lastname == ""|| Username == "" || mailID == ""|| password == ""|| confirmPassword == "")
	 { 
		errorMessage+="Empty data ..! Enter valid details";
	 } 
	 else
	 {
		 if(confirmPassword!=password) {
			errorMessage+="Password mismatch <br>" ;
			//exit();
		 }
	 
		if (!filter.test(mailID)) {
			errorMessage+= "Please provide a valid email address<br>";
			//exit();
		}
		
		if(!password.match(passw))   
		{   
			errorMessage+="Invalid password, try again<br>";
			//exit();
		}  
		
	}
	//window.location.homePage

	if(errorMessage!="")
	{
	document.getElementById("errorMessage").innerHTML = errorMessage; 
	}
	else
	{
		document.getElementById("top").style.display = "none";
		document.getElementById("bottom").style.display = "block";
		
    }
}

window.onload=function()
{
    document.getElementById("createAccount").onclick = create;
};
