// Is there a floating number here?

function isFloat(n){
    switch (typeof n) {
        case 'string':
            return /^([-]?[0-9]+)?\.([1-9][0-9]*|0+[1-9]+[0-9]*)$/.test(n.trim()) &&
                parseFloat(n.trim()) % 1 !== 0;
        case 'number':
            return !Number.isInteger(n);
        case 'object':
            return n ? Object.keys(n).some(v => isFloat(n[v])) : false;
        default:
            return false;
    }
}
