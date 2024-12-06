let form = document.forms[0]; // gets the first form from the html file 

form.addEventListener("submit", function (event) { //event triggered when submit is pressed to do the encryption/decryption
    event.preventDefault(); //prevents page from reloading 
    let result = ""; // This is to have the output as one string 

    //these grab the Ids for the inputs from html file
    let Input = document.getElementById("inputText").value;
    let key = parseInt(document.getElementById("shift").value);
    let direction = document.getElementById("left_or_right").value;
    let mode = document.getElementById("mode").value;

    //if the shift value is more then 26 or less then 1 then error pops up since there are only 26 letters in the alphabet 
    if (key > 26 || key < 1) {
        alert("STOPPPP AHHHHHHH");
    } else {
        //array of all the letter in the alphabet 
        let Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        for (let i = 0; i < Input.length; i++) { //loop through each character in the input text 
            let get_letter = Input[i].toLowerCase(); // convert the given characters to lower case in order to match the array 
            
            // checks if the character is in the alphabet (ignores numbers, spaces, symbols)
            if (!Letters.includes(get_letter)) {
                result += Input[i]; // append non-letters as they are to the result 
                continue;
            } else {
                let index = Letters.indexOf(get_letter); //find the index of the letter in the alphabet 

                // Determine effective shift direction
                let shift = key; 
                if (direction === "left" || mode === "decrypt") {
                    shift = -key; // Shift left or decrypt
                }

                // Calculate new index and wrapping the alphebet if its necessary 
                index = (index + shift + 26) % 26;

                let newLetter = Letters[index]; // get the new letter from the shifted index 
                // Preserve case of the given input 
                if (Input[i] === Input[i].toUpperCase()) {
                    newLetter = newLetter.toUpperCase();
                }
                result += newLetter;
            }
        }
    }
    //output 
    let output = document.getElementById("outputText");
    output.textContent = result;
});
