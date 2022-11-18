function validateForm() {
    var returnval = true;
  
    // Email Validation
    var regex = new RegExp("[a-z]+.[a-z]+@vitstudent.ac.in");
    var email = document.forms["myForm"]["email"].value;
    if (!regex.test(email)) {
      alert("Please Enter Valid email address as this email id does not belong to VIT");
      returnval = false;
    }
  
    return returnval;
  }
  