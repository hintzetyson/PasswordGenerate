// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var uppercase=confirm("Would you like uppercase letters?")
  var lowercase=confirm("Would you like lowercase letters?")
  var specialcharacters=confirm("Would you like special characters?")
  var numbers=confirm("Would you like numbers?")

  var password = generatePassword() {
  var allChars = "abcdefghijklmnopqrstuvwxyz";
  var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charNumbers = "1234567890";
  var charSpecial = "!@#$%^&*()_+-':;<>={}[]\/.?~ ";
  var ret = "";
  if(upperCase){
    allChars += charsUpper;
  }
  if(numbers){
    allChars += charNumbers;
  }
  if(special){
    allChars += charSpecial;  
  }
  //finding chars from included chars
  for(var i=0; i < chars; i++){
    var randomNumber = getRandom(0,allChars.length);
    ret += allChars.charAt(randomNumber);
    console.log(allChars.charAt(randomNumber));
  }
  return ret;
}
  };

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)