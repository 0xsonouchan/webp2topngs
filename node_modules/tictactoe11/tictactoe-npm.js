class TicTacToe {
    constructor() {
        this.board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        this.currentPlayer = 'X';
        this.moves = 0;
        this.winner = null;
    }

    makeMove(position) {
        if (this.board[position] === ' ' && !this.winner) {
            this.board[position] = this.currentPlayer;
            this.moves++;
            if (this.checkWinner(this.currentPlayer)) {
                this.winner = this.currentPlayer;
            } else if (this.moves === 9) {
                this.winner = 'draw';
            }
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            return true;
        }
        return false;
    }

    checkWinner(player) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];
        return lines.some(line => {
            return line.every(pos => this.board[pos] === player);
        });
    }

    printBoard() {
        let boardStr = '';
        for (let i = 0; i < this.board.length; i++) {
            boardStr += this.board[i];
            if ((i + 1) % 3 === 0 && i !== 8) {
                boardStr += '\n---------\n';
            } else if (i !== 8) {
                boardStr += ' | ';
            }
        }
        console.log(boardStr);
    }
}

module.exports = TicTacToe;
