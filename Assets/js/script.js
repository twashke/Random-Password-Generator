// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of options for random password
var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialArray = ["!","@","#","$","%","^","&","*","_"];

// issuedPassword Array once random password has been chosen
var issuedPassword = [];

// Write password to the #password input
function writePassword() {
    // Password created from generate Password function
    var password = generatePassword();
    // Input text in password section
    var passwordText = document.querySelector("#password");
    // Value to include is equal to the password variable
    passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function 
function generatePassword() {
// USER PROMPTS AND ALL POSSIBLE ERRORS
    // Opens prompt to user to choose a password length 
    userLength = prompt("Choose a number between 8 and 128 to create a random password!");
    // Console log user length chosen
    console.log("Password length " + userLength);

    // If user presses cancel it will send a message 
    if (!userLength) {
        alert("You chose to cancel, click Generate Passcode to restart!");
        // Refresh page for user
        location.reload();
    // If user chooses a number under 8, an error message 
    } else if (userLength<8) {
        alert("ERROR! Choose a number more than 8!");
        // Rerun function so user can answer correctly
        generatePassword();
    // If user chooses a number over 128, an error message
    } else if (userLength>128) {
        alert("ERROR! Choose  a number less than 128!");
        // Rerun function so user can answer correctly
        generatePassword();
    //  If the user inputs anything than a number, an error message 
    } else if (isNaN(userLength)) {
        alert("Choose a number between 8 and 128!");
        // Rerun function so user can answer correctly
        generatePassword();
    // Warning to choose at least one option.  
    } else {
        alert("Please answer the next four questions about your password.\nYou must answer YES (OK) to AT LEAST one of the questions, \notherwise your password will not be generated!");

// CRITERIA QUESTIONS FOR PASSWORD
        // Does the user want lowercase letters?
        lowercase = confirm("Do you want lowercase letters in your password?\nPlease press OK for Yes and Cancel for No.");
        // Console log user answer
        console.log("Lowercase letters " + lowercase);
            // If they selected OK to lowercase letters return message saying YES was chosen
            if (lowercase === true) {
                alert("You chose YES to lowercase letters!");
            // If they selected Cancel to lowercase letters return message saying NO was chosen
            } if (lowercase === false) {
                alert("You chose NO to lowercase letters!");
            };

        // Does the user want uppercase letters?
        uppercase = confirm("Do you want uppercase letters in your password?\nPlease press OK for Yes and Cancel for No.");
        // Console log user answer
        console.log("Upercase letters " + uppercase);
            // If they selected OK to uppercase letters return message saying YES was chosen
            if (uppercase === true) {
                alert("You chose YES to uppercase letters!");
            // If they selected Cancel to uppercase letters return message saying NO was chosen
            } if (uppercase === false) {
                alert("You chose NO to uppercase letters!");
            };

        // Does the user want numbers?
        numeric = confirm("Do you want numbers in your password?\nPlease press OK for Yes and Cancel for No.");
        // Console log user answer
        console.log("Numbers " + numeric);
            // If they selected OK to numbers return message saying YES was chosen
            if (numeric === true) {
                alert("You chose YES to numbers!");
            // If they selected Cancel to numbers return message saying NO was chosen
            } if (numeric === false) {
                alert("You chose NO to numbers!");
            };

        // Does the user want special characters?
        special = confirm("Do you want special characters in your password?\nPlease press OK for Yes and Cancel for No.");
        // Console log user answer
        console.log("Special characters " + special);
            // If they selected OK to special characters return message saying YES was chosen
            if (special === true) {
                alert("You chose YES to special characters!");
            // If they selected Cancel to special characters return message saying NO was chosen
            } if (special === false) {
                alert("You chose NO to special characters!");
            };
    };

// ALL POSSIBLE USER SELECTIONS AND HOW TO HANDLE
    // If user doesn't include confirm at least one of the questions, send alert and restart function.
    if (!lowercase && !uppercase && !numeric && !special) {
        userpassword = alert("You must choose yes to at least one of the four options!");
        generatePassword();
    // If all options are chosen
    } else if (lowercase && uppercase && numeric && special) {
        // Combine all four arrays
        userPassword = lowercaseArray.concat(uppercaseArray, numericArray, specialArray);
        // Console log userPassword created
        console.log(userPassword); 

    // If lowercase, uppercase and special are chosen 
    } else if (lowercase && uppercase && numeric) {
        // Combine lowercaseArray, uppercaseArray, and numericArray
        userPassword = lowercaseArray.concat(uppercaseArray, numericArray);
        // Console log userPassword created
        console.log(userPassword); 

    // If lowercase, uppercase and special are chosen 
    } else if (lowercase && uppercase && special) {
        // Combine lowercaseArray, uppercaseArray and specialArray
        userPassword = lowercaseArray.concat(uppercaseArray, specialArray);
        // Console log userPassword created
        console.log(userPassword); 

    // If lowercase, numeric and special are chosen
    } else if (lowercase && numeric && special) {
        // Combine lowercaseArray, numericArray and specialArray
        userPassword = lowercaseArray.concat(numericArray, specialArray);
        // Console log userPassword created
        console.log(userPassword); 

    // If uppercase, numeric and speical are chosen
    } else if (uppercase && numeric && special) {
        // Combine uppercaseArray, numericArray and speicalArray
        userPassword = uppercaseArray.concat(numericArray, specialArray);
        // Console log userPassword created
        console.log(userPassword); 

    // If lowercase and uppercase is chosen 
    } else if (lowercase && uppercase) {
        // Combine lowercaseArray and uppercaseArray
        userPassword =  lowercaseArray.concat(uppercaseArray);
        // Console log userPassword created
        console.log(userPassword); 

    // If lowercase and numeric are chosen
    } else if (lowercase && numeric) {
        // Combine lowercaseArray and numericArray
        userPassword = lowercaseArray.concat(numericArray);
        // Console log userPassword created
        console.log(userPassword);

    // If lowercase and special characters are chosen
    } else if (lowercase && special) {
        // Combine lowercaseArray and specialArray 
        userPassword = lowercaseArray.concat(specialArray);
        // Console log userPassword created
        console.log(userPassword);

    // If uppercase and numeric are chosen
    } else if (uppercase && numeric) {
        //  Combine uppercaseArray and numericArray
        userPassword = uppercaseArray.concat(numericArray);
        // Console log userPassword created
        console.log(userPassword);

    // If uppercase and special are chosen
    } else if (uppercase && special) {
        // Combine uppercaseArray and specialArray
        userPassword = uppercaseArray.concat(special);
        // Console log userPassword created
        console.log(userPassword);

    // If numeric and special are chosen 
    } else if (numeric && special) {
        // Combine numericArray and specialArray
        userPassword = numericArray.concat(specialArray);
        // Console log userPassword created
        console.log(userPassword);  

     // If only lowercase is chosen 
    } else if (lowercase) {
        // Use lowercaseArray for Password
        userPassword = lowercaseArray;
        // Console log userPassword created
        console.log(userPassword);

    // If only uppercase is chosen
    } else if (uppercase) {
        // Use uppercasewArray for Password
        userPassword = uppercaseArray;
        // Console log userPassword created
        console.log(userPassword);

    // If only numeric is chosen
    } else if (numeric) {
        // Use numericArray for Password
        userPassword = numericArray;
        // Console log userPassword created
        console.log(userPassword);

    // If only special is chosen 
    } else if (special) {
        // Use specialArray for Password
        userPassword = specialArray;
        // Console log userPassword created
        console.log(userPassword);          
    };

// RANDOM PASSWORD CREATED
    // Random selection of password using loop based on user selections
    for (var i = 0; i < userLength; i++) {
        // Creates variable for random;y selected password
        randomPassword = userPassword[Math.floor(Math.random() * userPassword.length)];
        // Input each item chosen into a new array
        issuedPassword.push(randomPassword);
        // Console log each option chosen
        console.log(randomPassword);
    };

// TURN PASSWORD INTO STRING
// Take the issuedPassword array and create a string in the password variable
    var password = issuedPassword.join("");
    // Console log password
    console.log("Password: " + password);
    // Return password to complete the function
    return password;
};