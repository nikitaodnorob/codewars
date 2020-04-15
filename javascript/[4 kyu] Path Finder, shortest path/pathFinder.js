// Path Finder #2: shortest path

function pathFinder(maze){
    const matrix = maze.split('\n').map(row => row.split(''));
    const n = matrix.length;
    if (n === 1) return 0;
    let queue = [ [0, 0, 1] ];
    let minLen = false;
    while (queue.length) {
        const [x, y, len] = [...queue.shift()];

        [[1,0], [0,1], [-1,0], [0,-1]].forEach(([dx, dy]) => {
            const [newX, newY] = [x + dx, y + dy];
            if (newX >= 0 && newX < n && newY >= 0 && newY < n && matrix[newX][newY] === '.') {
                if (newX === n - 1 && newY === n - 1) {
                    if (minLen === false) minLen = len;
                    else if (len < minLen) minLen = len;
                }
                matrix[newX][newY] = 'O';
                queue.push([newX, newY, len + 1]);
            }
        });
    }
    return minLen;
}
