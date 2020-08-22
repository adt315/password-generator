
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '//', ']', '^', ';', '`', '{', '|', '}', '~'];


function getPasswordOptions() {

  var passwordLength = prompt("How many characters would you like your password to be?           (Password must be between 8 and 128 characters)");
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a length between 8 and 128 characters");

  }
  var hasLowercase = confirm("Do you want your password to include lowercase letters?");
  console.log(hasLowercase);

  var hasUppercase = confirm("Do you want your password to include uppercase letters?");
  console.log(hasUppercase);

  var hasNumbers = confirm("Do you want your password to include numbers?");
  console.log(hasNumbers);

  var hasSpecialChar = confirm("Do you want your password to include special characters?");
  console.log(hasSpecialChar);

  var passwordOptions = {
    passwordLength: passwordLength,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumbers: hasNumbers,
    hasSpecialChar: hasSpecialChar
  }
  return passwordOptions
}

  // (after they answer each prompt make sure at least one character type is selected)(if loercaseLetters and uppercaseLetters and hasNubers and specialChar all = false, alert please select at least one type of character)
  
function generatePassword () {
  var options = getPasswordOptions();
  console.log(options);

  // var options = [];
  // var  = options.length;
  
  // if()
  //else()
  
//   for ( var i = 0; i < length; i++ ) {
//    .push options.(Math.floor(Math.random() * ));
// }
// return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);