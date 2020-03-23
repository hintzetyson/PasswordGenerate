// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {


//Get the length of the password, returns to the start if it isn't correct
  var lengthprompt=prompt("What would you like the length of your password to be? It must be between 8 and 128 characters");
  lengthprompt = parseInt(lengthprompt);
  if (lengthprompt < 8) {
    alert("Your password must be at least 8 characters.");
    writePassword();
  }
  if (lengthprompt > 128 ) {
    alert("Your password must be less than 128 characters.")
    writePassword();
  }

// Confirming the rest of the parameters
  var uppercaseconfirm=confirm("Would you like uppercase letters?");
  var lowercaseconfirm=confirm("Would you like lowercase letters?");
  var specialcharactersconfirm=confirm("Would you like special characters?");
  var numbersconfirm=confirm("Would you like numbers?");

  if (uppercaseconfirm ==false && lowercaseconfirm == false && specialcharactersconfirm == false && numbersconfirm == false) {
    alert("You must select at least 1 parameter, program will now start over");
    writePassword();

  }

  //Setting some variables
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var Numbers = "1234567890";
  var Specialcharacters = "!@#$%^&*()_+-':;<>={}[]\/.?~ ";
  var includedChars = "";

  //Checking the confirm of the variables
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


  //Looping through the password length to get all characters
  for(var i=0; i < lengthprompt; i++){
      var randomNumber = Math.floor(Math.random()*includedChars.length-1);
      password += includedChars.charAt(randomNumber);
      console.log(includedChars.charAt(randomNumber));
    }
  

  //Putting the text on the screen
  var passwordText = document.getElementById("password");
  
  passwordText.value = password;

  
  
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)