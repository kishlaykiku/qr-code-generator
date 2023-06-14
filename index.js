/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// Importing modules
import inquirer from "inquirer"; // For input and output
import qr from "qr-image"; // For text to qr image conversion
import fs from "fs"; //File system module

// Inquirer Usage: Getting user input and validating it
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            name: 'address',
            message: 'Enter Address: ',
            type: 'input',
            // Validate the input for empty string or invalid format
            validate: function(address) {
                // Creating regex object
                const re = new RegExp('(http|https)://(www.)?');
                // Checking address if its matches with regex pattern
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

        // Storing the address in a variable
        const addressLine = answers.address;

        // File System Usage: Storing the address in a txt file
        fs.writeFile("address.txt", addressLine, (err) => {
            if(err) throw err;
            console.log("File has been saved");
        })

        // Qr Image Usage: Generating qr code fromt the address
        let qr_png = qr.image(addressLine, {type: 'png', margin: 5, parse_url: true});
        // Saving the qr code in the form of qr image
        qr_png.pipe(fs.createWriteStream('qrcode.png'));
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

