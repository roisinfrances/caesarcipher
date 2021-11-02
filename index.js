let alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"];

function cipher(inputText, shiftKey, encode) {
    
    inputText = inputText.toLowerCase();
    shiftKey = parseInt(shiftKey);

    let testMsg = ""

    for (letter of inputText) {

        // index of letter from alphabet array. i.e. h = 7
        letterIndex = alphabet.indexOf(letter);

        if (encode === true) {
            newIndex = letterIndex + shiftKey;
        } else {
            newIndex = letterIndex - shiftKey;
        }

        // wrapping - for encoding
        if (newIndex > 25 ) {
            newIndex = newIndex - 26
        // wrapping for decoding
        } else if (newIndex < 0 ) {
            newIndex = newIndex + 26
        }

        // Get letter from alphabet for letter at index 11. i.e "l"
        newLetter = alphabet[newIndex]

        // End of array, add the new letter to the string
        testMsg += newLetter;
    }

    // Return our ciphered string
    return testMsg;

}

function startEncode() {

    let shiftKey = document.getElementById('shiftKey').value;
    let inputText = document.getElementById('inputText').value;

    let encodedText = cipher(inputText, shiftKey, true);

    document.getElementById('output').value = encodedText 

}

function startDecode() {

    let shiftKey = document.getElementById('shiftKey').value;
    let inputText = document.getElementById('inputText').value;

    let encodedText = cipher(inputText, shiftKey, false);

    document.getElementById('output').value = encodedText 

}

// let encoded = cipher('abc', 4);

// console.log(encoded);


