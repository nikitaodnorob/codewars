// Replace With Alphabet Position

function alphabetPosition(text) {
    return text
        .split('')
        .filter(ch => ch.toLowerCase() !== ch.toUpperCase())
        .map(ch => ch.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1).join(' ');
}
