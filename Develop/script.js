// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables to choose from
var uppercase = ["'A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'"]
var lowercase = ["'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'"]
var specialC = ["'~','!','@','#''$''%''^''&''*''('')''_''+'"]

//define generate password
function generatePassword(){
  console.log("Button has been clicked");
var passwordLength = window.prompt("How many characters for your password?")
if (passwordLength<8 || passwordLength>128){
  window.alert("Plus select length between 8 & 128 characters");
  //return;
} else{
  if (window.confirm("Would you like uppercase letters?"));
 
  if (window.confirm("Would you like special characters?"));
}
if (window.confirm("Would you like lowercase letters?"));

  return( "generated password");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
