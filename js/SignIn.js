function checkSignIn(){
		//alert("external js link working");
		//Checking if the user hasn't filled in the form
		
		
		// Verifying Email
		
		var email=document.forms["SignIn"] ["email"].value;
		var emailLength = email.length;
		var emailCheck=email.includes("@");
		var emailCheck2=email.includes(".");
		var validEmail=true;
		
		if(email == "" ||email ==null){
        alert("Email must be entered");
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
	
	
	// Verifying Password
	var psw=document.forms["SignIn"]["psw"].value;
	var pswLength = psw.Length;
	var validPsw= true;
    
	if(psw == "" || psw == null){
        alert("You must enter your password");
		validPsw==false;
		return;
   
    }
		
} // End of Function
