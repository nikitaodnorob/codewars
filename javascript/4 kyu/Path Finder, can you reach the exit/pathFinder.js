// Path Finder #1: can you reach the exit?

function pathFinder(maze){
    const matrix = maze.split('\n').map(row => row.split(''));
    const n = matrix.length;
    let queue = [ [0, 0] ];
    while (queue.length) {
        const [x, y] = [...queue.shift()];

        [[1,0], [0,1], [-1,0], [0,-1]].forEach(([dx, dy]) => {
            const [newX, newY] = [x + dx, y + dy];
            if (newX >= 0 && newX < n && newY >= 0 && newY < n && matrix[newX][newY] === '.') {
                matrix[newX][newY] = 'O';
                queue.push([newX, newY]);
            }
        });
    }
    return matrix[n-1][n-1] === 'O';
}
