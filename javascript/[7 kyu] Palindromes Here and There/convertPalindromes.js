// Palindromes Here and There

const convertPalindromes = numbers => numbers.map(
    n => n.toString() === n.toString().split('').reverse().join('')
        ? 1
        : 0
);
