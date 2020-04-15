// Sudoku Solution Validator

const Range = (a, b) => [...(new Array(b - a + 1)).keys()].map(v => v + a);

const isArrayDistinct = arr => !arr.some((v,i) => v > 0 && arr.indexOf(v, i + 1) > i);

function validSolution(board){
    const rows = board;
    const columns = board.map((row, i) => board.reduce((acc, el, j) => [...acc, board[j][i]], []));
    const squares = board.map((row, i) => {
        const rowStart = Math.floor(i / 3) * 3;
        const colStart = i % 3 * 3;
        const squareRows = Range(0, 2).map(j => board[rowStart + j].slice(colStart, colStart + 3));
        return squareRows.reduce((acc, arr) => [...acc, ...arr], []);
    });

    return [rows, columns, squares].every(arr => arr.every(isArrayDistinct));
}
