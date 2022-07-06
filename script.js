//Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays of characters 
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = ("");
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password(minimum 8 and maximum 127)
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));


  while(confirmLength <= 7 || confirmLength >= 128) {
         alert("Password must be between 8-127 characters long. Try again!");
         var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

    // choose password parameters 
    var confirmSpecialCharacter = confirm("Click OK to confirm if you like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you like to include uppercase characters");

      // will print if none of the parameters chooses 
      if(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
            alert("You must choose at least one parameter");
            var confirmSpecialCharacter = confirm("Click OK to confirm if you like to include special characters");
            var confirmNumericCharacter = confirm("Click OK to confirm if you like to include numeric characters");    
            var confirmLowerCase = confirm("Click OK to confirm if you like to include lowercase characters");
            var confirmUpperCase = confirm("Click OK to confirm if you like to include uppercase characters");   
    } 

      // Assign an action to the password 
      var passwordChar = []
      
    if (confirmNumericCharacter) {
          passwordChar = passwordChar.concat(numberArray)
    }

    if (confirmSpecialCharacter) {
          passwordChar = passwordChar.concat(specialCharArray)
    }
      
    if (confirmLowerCase) {
         passwordChar = passwordChar.concat(lowerCaseArray)
    }

    if (confirmUpperCase) {
         passwordChar = passwordChar.concat(upperCaseArray)
    }
        
    console.log(passwordChar)

      // print out on genereate password base on selected options and arrays by the users
      var randomPassword = ("")
      
      for (var i = 0; i < confirmLength; i++) {
            randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
            console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);