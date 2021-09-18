// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables to choose from
//var uppercase = ["'A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'"]
//var lowercase = ["'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'"]
//var specialC = ['~','!','@','#','$','%','^','&','*','(',')','_','+']

//define generate password
function generatePassword(){
  console.log("Button has been clicked");
var allSelect = [];
var password = "";
var charLength = NaN;
var charLength = window.prompt("How many characters for your password?")

if (charLength < 8 || charLength > 128){
  window.alert("Please select length between 8 & 128 characters");
  generatePassword();
} else if ((charLength >=8) && (charLength <= 128) ){
  
}else {
  window.alert("Please enter valid number.")
  generatePassword();
}

console.log(charLength);

var upperC = window.confirm('Would you like capital letters?');
var lowerC = window.confirm("Would you like lower case letters?");
var specC = window.confirm("Would you like special characters?");
var numbr = window.confirm("Would like any numbers?");

if (!specC && !lowerC && !numbr && !upperC){ window.alert("Select at least one option")
 return password;

}
if (upperC){
  var uppercase = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  allSelect = [...uppercase,...allSelect];
  return;
}if (lowerC){
  var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  allSelect = [...lowercase,...allSelect];
  return;
  
} if (specC){
  var specialC = ['~','!','@','#','$','%','^','&','*','(',')','_','+']
  allSelect = [...specialC,...allSelect];
  return;
}if (numbr){
  var numbers = ['1','2','3','4','5','6','7','8','9','0']
  allSelect = [...numbers,...allSelect];
  return;
}

 for (var i =0; i < charLength; i++){
   var rando = Math.floor(Math.random()*allSelect.length);
   password += allSelect[rando];
 }
 console.log(password)
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
