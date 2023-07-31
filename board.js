const Piece = require('./piece.js');

class Board {
  
  constructor() {
    this.board = [];
    for (let i=0; i<8; i++)
      this.board[i] = new Array(8).fill(null);
  }

  clear_board() {
    [1,2,3,4,5,6,7,8].forEach(r => {
      [1,2,3,4,5,6,7,8].forEach(c => {
        this.clear_piece(c,r);
      });
    });
  }

  initialize() {
    this.clear_board();
    [1,2,3,4,5,6,7,8].forEach(col => {
      this.move_piece(col, 2, new Piece('P','W'));
      this.move_piece(col, 7, new Piece('P','B'));
    });
    [1,8].forEach(col => {
      this.move_piece(col, 1, new Piece('R','W'));
      this.move_piece(col, 8, new Piece('R','B'));
    });
    [2,7].forEach(col => {
      this.move_piece(col, 1, new Piece('N','W'));
      this.move_piece(col, 8, new Piece('N','B'));
    });
    [3,6].forEach(col => {
      this.move_piece(col, 1, new Piece('B','W'));
      this.move_piece(col, 8, new Piece('B','B'));
    });
    this.move_piece(4, 1, new Piece('Q','W'));
    this.move_piece(4, 8, new Piece('Q','B'));
    this.move_piece(5, 1, new Piece('K','W'));
    this.move_piece(5, 8, new Piece('K','B'));
  }

  move_piece(col, row, piece) {
    this.board[row-1][col-1] = piece;
  }

  clear_piece(col, row) {
    this.board[row-1][col-1] = null;
  }

  print_board(flip_board = false) {
    let rows = !flip_board ? [0,1,2,3,4,5,6,7] : [7,6,5,4,3,2,1,0];
    rows.forEach(r => {
      process.stdout.write('+---+---+---+---+---+---+---+---+\n');
      for (let c=0; c<8; c++) {
        process.stdout.write('|');
        if (this.board[r][c] != null) {
          process.stdout.write(' ');
          this.board[r][c].print_piece();
          process.stdout.write(' ');
        }
        else {
          process.stdout.write('   ');
        }
      }
      process.stdout.write('|\n');
    });
    process.stdout.write('+---+---+---+---+---+---+---+---+\n');
  }
}

module.exports = Board;
