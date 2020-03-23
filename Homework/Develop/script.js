// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {



  var lengthprompt=prompt("What would you like the length of your password to be?");
  lengthprompt = parseInt(lengthprompt);
  if (lengthprompt < 8) {
    alert("Your password must be at least 8 characters.");
    passwordParameters();
  }
  if (lengthprompt > 128 ) {
    alert("Your password must be less than 128 characters.")
    passwordParameters();
  }

  var uppercaseconfirm=confirm("Would you like uppercase letters?");
  var lowercaseconfirm=confirm("Would you like lowercase letters?");
  var specialcharactersconfirm=confirm("Would you like special characters?");
  var numbersconfirm=confirm("Would you like numbers?");
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var Numbers = "1234567890";
  var Specialcharacters = "!@#$%^&*()_+-':;<>={}[]\/.?~ ";
  var includedChars = "";

  if(lowercaseconfirm){
    includedChars += lowercase;
  }
  if(uppercaseconfirm){
      includedChars += Uppercase;
    }
  if(numbersconfirm){
      includedChars += Numbers;
    }
  if(specialcharactersconfirm){
      includedChars += Specialcharacters;  
    }

  for(var i=0; i < lengthprompt; i++){
      var randomNumber = getRandom(0,includedChars.length);
      password += includedChars.charAt(randomNumber);
      console.log(lowercase.charAt(randomNumber));
    }
  
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  
  
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)