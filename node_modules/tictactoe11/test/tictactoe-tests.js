const assert = require('assert');
const TicTacToe = require('../lib/TicTacToe');

describe('TicTacToe', () => {
    describe('#makeMove()', () => {
        it('should make a move and update the board', () => {
            const game = new TicTacToe();
            game.makeMove(0, 0);
            assert.strictEqual(game.board[0][0], 'X');
            assert.strictEqual(game.currentPlayer, 'O');
        });

        // Add more test cases for making moves
    });

    // Add more test cases for other methods
});
