/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import fs from "fs";

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            name: 'address',
            message: 'Enter Address: ',
            type: 'input',
            validate: function(address) {
                var re = new RegExp('(http|https)://(www.)?');
                if(address && re.test(address))
                {
                   return true;
                }
                return "Invalid Address!";
            }
        }
    ])
    .then((answers) => 
    {
        // Use user feedback for... whatever!!
        console.log(answers.address);
    })
    .catch((error) => 
    {
        if (error.isTtyError) 
        {
            // Prompt couldn't be rendered in the current environment
        } 
        else 
        {
            // Something else went wrong
        }
    });