// Product of consecutive Fib numbers

const fib = [];
[...Array(50).keys()].forEach(
    n => fib.push(n < 2 ? n : fib[n - 2] + fib[n - 1])
);

function productFib(prod){
    for (let i = 0; i < 50; i++) {
        if (fib[i] * fib[i + 1] >= prod)
            return [ fib[i], fib[i+1], fib[i]*fib[i+1] ===prod ];
    }
}
