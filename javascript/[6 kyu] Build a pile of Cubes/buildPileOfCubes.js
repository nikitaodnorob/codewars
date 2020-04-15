// Build a pile of Cubes

function findNb(m) {
    let [sum, n] = [0, 1];
    while (true) {
        sum += n ** 3;
        if (sum === m) return n;
        if (sum > m) return -1;
        n++;
    }
}
