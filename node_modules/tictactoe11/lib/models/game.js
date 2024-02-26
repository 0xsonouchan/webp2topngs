class Game {
    constructor(size, playerX, playerO) {
        this.board = new Board(size);
        this.playerX = playerX;
        this.playerO = playerO;
        this.currentPlayer = playerX;
        this.ai = new AI(playerO);
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === this.playerX ? this.playerO : this.playerX;
    }

    play() {
        while (!this.board.isFull()) {
            const { row, col } = this.currentPlayer === this.playerX ? this.ai.makeMove(this.board) : this.promptMove();
            this.board.makeMove(row, col, this.currentPlayer);
            this.board.print();
            if (this.board.checkWinner()) {
                console.log(`${this.currentPlayer} wins!`);
                return;
            }
            this.switchPlayer();
        }
        console.log("It's a tie!");
    }

    promptMove() {
        // Implement player move input here
        // For simplicity, you can use readline or prompt-sync to get input from the user
    }
}

// Example usage:
const game = new Game(3, 'X', 'O');
game.play();
