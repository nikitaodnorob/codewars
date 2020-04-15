// Your order, please

const order = words => words
    .split(' ')
    .sort((w1, w2) => parseInt(w1.replace(/[a-zA-Z]/g,'')) - parseInt(w2.replace(/[a-zA-Z]/g,'')))
    .join(' ');
