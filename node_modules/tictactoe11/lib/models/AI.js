class AI {
    constructor(player) {
        this.player = player;
    }

    makeMove(board) {
        // Basic AI: Randomly choose a valid move
        const size = board.size;
        let row, col;
        do {
            row = Math.floor(Math.random() * size);
            col = Math.floor(Math.random() * size);
        } while (!board.isValidMove(row, col));
        return { row, col };
    }
}
