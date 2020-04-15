// Decode the Morse code

decodeMorse = function(morseCode) {
    return morseCode.trim().split("   ").map(
        word => word.split(" ").map(c => MORSE_CODE[c]).join("")
    ).join(" ");
};
