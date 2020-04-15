// Sum of Pairs

const sum_pairs = (ints, s) =>{
    const viewed = [];
    for (let i = 0; i < ints.length; i++) {
        if (viewed[s - ints[i]]) return [s - ints[i], ints[i]];
        viewed[ints[i]] = true;
    }
};
