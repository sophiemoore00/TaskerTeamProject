function checkRegister(){
		//alert("external js link working");
		//Checking if the user hasn't filled in the form
	
		
		
		//Verifying name
		var name=document.forms["RegisterForm"] ["namebox"].value;
		var validName = true;
			if(name == "" || name == null) {
				alert ("You must enter your name");
				validName=false;
				return;
			}
			
		// Verifying Email
		
		var email=document.forms["RegisterForm"] ["email"].value;
		var emailLength = email.length;
		var emailCheck=email.includes("@");
		var emailCheck2=email.includes(".");
		var validEmail=true;
		
		if(email == "" ||email ==null){
        alert("Email must be filled in to register");
        validEmail==false;
        return;
    }
	
	if(emailLength <8 ||emailLength>65 ){
        alert("Email Length is not valid");
        validEmail==false;
        return;
    }
	
	if(emailCheck==false){
        alert("Not a valid email");
        validEmail==false;
        return;
    }
	
	if(emailCheck2==false){
        alert("Not a valid email");
        validEmail==false;
        return;
    }
	
	//Verifying Password
	var psw=document.forms["RegisterForm"]["psw"].value;
	var pswLength = psw.Length;
	var validPsw= true;
    
	if(psw == "" || psw == null){
        alert("You must create a password");
		validPsw==false;
		return;
   
    }
	
	//Going to Log In
	if (validName == true && validEmail == true && validPsw == true) {
	
	alert("You have successfully registered for Tasker!");
	
	}
	
	
	} //End of function 

