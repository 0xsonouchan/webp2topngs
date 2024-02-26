const readline = require('readline');

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

function main() {
    const game = new TicTacToe();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('Welcome to Tic Tac Toe!\n');
    console.log('Here is the initial board:\n');
    game.printBoard();

    rl.on('line', (input) => {
        const position = parseInt(input);
        if (isNaN(position) || position < 0 || position > 8) {
            console.log('Invalid input. Please enter a number between 0 and 8.');
        } else {
            if (game.makeMove(position)) {
                console.log(`\nPlayer ${game.currentPlayer}'s turn:\n`);
                game.printBoard();
                if (game.winner) {
                    if (game.winner === 'draw') {
                        console.log('\nIt\'s a draw!');
                    } else {
                        console.log(`\nPlayer ${game.winner} wins!`);
                    }
                    rl.close();
                }
            } else {
                console.log('Invalid move. Please choose an empty position.');
            }
        }
    });
}

main();
