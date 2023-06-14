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
            validate(answers)
            {
                // var re = new RegExp('(http|https)://(www.)?');
                if(!answers)
                {
                    return "Enter valid address";
                }
                return true;
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