// Decode the Morse code, advanced

const getLong = bits => {
    return bits.match(/1+|0+/g).map(s => s.length).reduce((acc, v) => acc < v ? acc : v, 100000);
};

const setSingleLong = (bits, long) => {
    return bits
        .replace(new RegExp(''.padStart(long, '1'), 'g'), '1')
        .replace(new RegExp(''.padStart(long, '0'), 'g'), '0');
};

const decodeBits = function(bits){
    bits = bits.substring(bits.indexOf('1'), bits.lastIndexOf('1') + 1);
    bits = setSingleLong(bits, getLong(bits));
    return bits
        .replace(/0000000/g, '   ')
        .replace(/111/g, '-')
        .replace(/000/g, ' ')
        .replace(/1/g, '.')
        .replace(/0/g, '')
        .replace(/1+/, '.');
};

const decodeMorse = function(morseCode){
    return morseCode.trim().split("   ").map(
        word => word.split(" ").map(c => MORSE_CODE[c]).join("")
    ).join(" ");
};
