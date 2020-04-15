// Take a Number And Sum Its Digits Raised To The Consecutive Powers

function sumDigPow(a, b) {
    return [...Array(b - a + 1).keys()].map(key => key + a).filter(
        n => n
            .toString()
            .split('')
            .map(dig => parseInt(dig))
            .map((dig, i) => Math.pow(dig, i + 1))
            .reduce((a, b) => a + b) === n
    );
}
