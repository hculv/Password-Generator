// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChars = ['!', '#', '$', '%', '&', '(', ')', '*', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']



// Function to generate random numbers
function generateRandomNumber (min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
  };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Function to generate password


function generatePassword () {
var chars = []
var passwordOutput = []
var charAmount = 10;
var charAmount = window.prompt("How many characters would you like in your password?")
charAmount = parseInt(charAmount)

// How long the password will be

while ( charAmount > 128 || charAmount <= 8 || isNaN(charAmount)) {
  alert("Password needs to be between 8 and 28 characters.")
  var charAmount = window.prompt("How many characters would you like in your password?")
  charAmount = parseInt(charAmount)
}

// Confirm Password Variables


var wantNumbers = window.confirm("Do you want numbers?");
var wantSpecialChars = window.confirm("Do you want special characters?");
var wantUpper = window.confirm("Do you want uppercase characters?");
var wantLower = window.confirm("Do you want lowercase characters?");

if (wantNumbers) {
  chars = chars.concat(numbers)
};
if (wantSpecialChars) {
  chars = chars.concat(specialChars)
};
if (wantUpper) {
  chars = chars.concat(upperCase)
};
if (wantLower) {
  chars = chars.concat(lowerCase)
};

// For Loop to Generate Password 


for (var i = 0; i < charAmount; i++) {
  passwordOutput = passwordOutput.concat(chars[generateRandomNumber(1, chars.length)])
};
return (passwordOutput.join(""));
};

} 


// Event listener to generate button

generateBtn.addEventListener("click", writePassword); 