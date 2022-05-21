
var specChars = ['!', '#', '$', '%', '&', '(', ')', '*', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var button = document.querySelector("#generate");



function generateRandomNumber (min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
  };

function printPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



function generatePassword () {
var chars = []
var userOutput = []
var charAmount = 8;
var charAmount = window.prompt("How many characters would you like in your password?")
charAmount = parseInt(charAmount)


while ( charAmount > 128 || charAmount <= 8 || isNaN(charAmount)) {
  alert("Password needs to be between 8 and 28 characters.")
  var charAmount = window.prompt("How many characters would you like in your password?")
  charAmount = parseInt(charAmount)
}



var userNumbers = window.confirm("Do you want numbers?");
if (userNumbers) {
  chars = chars.concat(numbers)
};



var userSpecChars = window.confirm("Do you want special characters?");
if (userSpecChars) {
  chars = chars.concat(specChars)
};

var userUpper = window.confirm("Do you want uppercase letters?");
if (userUpper) {
  chars = chars.concat(upperCase)
};

var userLower = window.confirm("Do you want lowercase letters?");
if (userLower) {
  chars = chars.concat(lowerCase)
};



for (var i = 0; i < charAmount; i++) {
  userOutput = userOutput.concat(chars[generateRandomNumber(1, chars.length)])
};
return (userOutput.join(""));
};

} 

button.addEventListener("click", printPassword); 
