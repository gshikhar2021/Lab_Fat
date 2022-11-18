function validateForm() {
  var returnval = true;
  //perform validation and if validation fails, set the value of returnval to false

  // 1-> First Name , Last Name and Registration is auto validated using "required" keyword

  // Email Validation
  var regex = new RegExp("[a-z]+.[a-z]+@vitstudent.ac.in");
  var email = document.forms["myForm"]["email"].value;
  if (!regex.test(email)) {
    alert("Please Enter Valid email address as this email id does not belong to VIT");
    returnval = false;
  }

  // Password Validation
  var password = document.forms["myForm"]["password"].value;
  //At least 8 characters
  if (password.length < 8) {
    alert("Password length is too short. Please make it greater than 8");
    returnval = false;
  }

  var upper = 0, lower = 0, number = 0, special = 0; // Counting characters
  for (var i = 0; i < password.length; i++) {
    if (password[i] >= "A" && password[i] <= "Z") upper++;
    else if (password[i] >= "a" && password[i] <= "z") lower++;
    else if (password[i] >= "0" && password[i] <= "9") number++;
    else special++;
  }
  console.log("Upper Characters = ", upper);
  console.log("Lower Characters = ", lower);
  console.log("Numeric Characters = ", number);
  console.log("Special Characters = ", special);
  if (upper < 1) {
    alert("Upper Case must be greater than or equal to 1");
    returnval = false;
  }
  else if (number < 3) {
    alert("Count of digits must be greater than or equal to 3");
    returnval = false;
  }
  else if (special < 1) {
    alert("Special Characters must be greater than or equal to 1");
    returnval = false;
  }

  // Validating Phone number
  var phone = document.forms["myForm"]["phone"].value;
  if (phone.length < 13 || phone.length > 13) {
    alert("Please Enter the Phone No. in correct format. Add + before number");
    returnval = false;
  }

  return returnval;
}
