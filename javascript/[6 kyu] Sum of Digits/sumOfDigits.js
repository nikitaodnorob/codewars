// Sum of Digits / Digital Root

function digital_root(n) {
    return n < 10 ? n : digital_root(
        n.toString().split('').reduce((a,b) => a + parseInt(b), 0)
    );
}
