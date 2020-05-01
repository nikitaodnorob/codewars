// Moving Zeros To The End

const moveZeros = function (arr) {
    return [
        ...arr.filter(v => v !== 0),
        ...arr.filter(v => v === 0)
    ];
};
