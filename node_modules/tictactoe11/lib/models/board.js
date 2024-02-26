class Board {
    constructor(size) {
        this.size = size;
        this.grid = Array.from({ length: size }, () => Array.from({ length: size }, () => null));
    }

    isValidMove(row, col) {
        return row >= 0 && row < this.size && col >= 0 && col < this.size && this.grid[row][col] === null;
    }

    makeMove(row, col, player) {
        if (this.isValidMove(row, col)) {
            this.grid[row][col] = player;
            return true;
        }
        return false;
    }

    isFull() {
        return this.grid.every(row => row.every(cell => cell !== null));
    }

    print() {
        console.log(this.grid.map(row => row.map(cell => cell || '-').join(' ')).join('\n'));
    }

    checkWinner() {
        // Add logic to check for a winner (e.g., three in a row)
    }
}
