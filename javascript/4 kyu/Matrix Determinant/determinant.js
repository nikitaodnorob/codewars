// Matrix Determinant

const getMinor = (m, x, y) => m
    .filter((row, i) => i !== x)
    .map(row => row.filter((v, j) => j !== y));

function determinant(m) {
    switch (m.length) {
        case 1:
            return m[0][0];
        case 2:
            return m[0][0] * m[1][1] - m[0][1] * m[1][0];
        default:
            return m
                .map((row, j) => m[0][j] * determinant(getMinor(m, 0, j)))
                .reduce((acc, det, i) => acc + det * (i % 2 ? -1 : 1));
    }
}
