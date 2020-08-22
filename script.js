
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '//', ']', '^', ';', '`', '{', '|', '}', '~'];

var passwordLength = 8;

// function getUserInput() {
function getLength() {
  var initialLength = prompt("How many characters would you like your password to be?           (Password must be between 8 and 128 characters)");
  
    if (initialLength > 8 && initialLength < 128) {
      passwordLength = initialLength;
      
    } else {
    alert("Please enter a number between 8 and 128");
    getLength();
    } 
} 

var hasLowercase = false;
var hasUppercase = false;
var hasNumbers = false;
var hasSpecialChar = false;

function getCharacters() {
  var initialLowercase = confirm("Do you want your password to include lowercase letters?");
  var initialUppercase = confirm("Do you want your password to include uppercase letters?");
  var initialNumbers = confirm("Do you want your password to include numbers?");
  var initialSpecialChar = confirm("Do you want your password to include special characters?");

    if (initialLowercase === true || initialUppercase === true || initialNumbers === true || initialSpecialChar === true) {
      hasLowercase = initialLowercase;
      hasUppercase = initialUppercase;
      hasNumbers = initialNumbers;
      hasSpecialChar = initialSpecialChar;
    } else {
      alert("Please select at least one type of character");
      getCharacters();
    } 
}

// function getPasswordOptions() {
//   var passwordOptions = {
//     passwordLength: passwordLength,
//     hasLowercase: hasLowercase,
//     hasUppercase: hasUppercase,
//     hasNumbers: hasNumbers,
//     hasSpecialChar: hasSpecialChar
//   }
//   return passwordOptions
// }
  // (after they answer each prompt make sure at least one character type is selected)(if loercaseLetters and uppercaseLetters and hasNubers and specialChar all = false, alert please select at least one type of character)
  
function generatePassword () {
  getLength();
  console.log(passwordLength);
  getCharacters();
  console.log(hasLowercase);
  console.log(hasUppercase);
  console.log(hasNumbers);
  console.log(hasSpecialChar);
}
//   var options = getPasswordOptions();
//   console.log(options);

//   var chooseFrom = [];
  // var  = .length;
  
  // if()
  //else()
  
//   for ( var i = 0; i < length; i++ ) {
//    .push options.(Math.floor(Math.random() * ));
// }
// return password;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);