class TicTacToe {
    constructor() {
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.currentPlayer = 'X';
    }

    makeMove(row, col) {
        if (this.board[row][col] === ' ') {
            this.board[row][col] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            return true;
        } else {
            return false; // Invalid move
        }
    }

    checkWinner() {
        // Add logic to check for a winner
    }

    // Add more methods as needed
}

module.exports = TicTacToe;
