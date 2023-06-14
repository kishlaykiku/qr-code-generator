/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";

inquirer
    .prompt([
    {
        name: 'address',
        message: 'Enter address: ',
        type: 'input',
        validate(answers) {
            // const regex = '((http|https)://)(www.)?';
            if(!answers)
            {
                return "Please enter an address.";
            }
            return true;
        } 
    }
    ])
    .then((answers) => 
    {
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