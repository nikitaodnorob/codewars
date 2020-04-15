// Common Denominators

const gcd = (a, b) => {
    let [x, y] = a > b ? [a, b] : [b, a];
    while (y > 0) {
        x = x % y;
        [x, y] = [y, x];
    }
    return x;
};

const lcm = (a, b) => a * b / gcd(a, b);

function convertFrac(lst){
    const denoms = lst.map(v => v[1]);
    const commonDenom = denoms.reduce((acc, v) => lcm(acc, v), 1);
    const res = lst.map(v => [commonDenom / v[1] * v[0], commonDenom]);
    return res.map(arr => `(${arr[0]},${arr[1]})`).join("");
}
