
// define variables/arrays first (lowercase, uppercase, numeric, special characters, etc)
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', ';', '`', '{', '|', '}', '~'];

// Do something with length?

// - somewhere in the code create an empty variable/array that will eventually be populated with the specific character types the user chooses


// - also have an empty variable/array for the user's eventual unique password


// Write password to the #password input


//        Prompts:
//        - length of password (between 8 and 128 characters)
// 	   (somehow test that the length the user enters is between 8 and 128 characters - if it isn't send an error message, and/or have them reenter, and/or have them start over)
// 	   - use lowercase letters?
// 	   - use uppercase letters?
// 	   - use numbers?
// 	   - use special characters?
// 	   (after they answer each prompt make sure at least one character type is selected)

function getPasswordOptions() {

  var length = prompt("How many characters would you like your password to be?");
  console.log(length);
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters");
  }
  var lowercaseLetters = confirm("Do you want your password to include lowercase letters?");
  console.log(lowercaseLetters);

  var uppercaseLetters = confirm("Do you want your password to include uppercase letters?");
  console.log(uppercaseLetters);

  var hasNumbers = confirm("Do you want your password to include numbers?");
  console.log(hasNumbers);

  var passwordOptions = {
    length: length,
    lowercaseLetters: lowercaseLetters,
    uppercaseLetters: uppercaseLetters,
    hasNumbers: hasNumbers
  }
  return passwordOptions
}

function generatePassword () {
  var options = getPasswordOptions();
  console.log(options);
}

// - write conditionals (with if/else statements or possibly a loop) that checks to see if the user chose true for each prompt and if true add/push that character type into the varaiable/array of the user's chosen character types (side note += means add; or use .push)

// - use a function/formula that selects random numbers which are used in selecting the numbers/letters/special characters from the variable/array that includes the user's chosen character types, and put these into the empty array for the user's unique password

// - display the user's unique password on screeen or in an alert

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// - add event listener for when the user clicks the generate password button, which then leads to a function which runs a series of prompts for the user to select the criteria to include in their password
generateBtn.addEventListener("click", writePassword);