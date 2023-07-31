class Piece {
  /*
    TYPES: 
      'P': Pawn
      'B': Bishop
      'N': Knight
      'R': Rook
      'Q': Queen
      'K': King
    
    COLORS: 
      'W': White
      'B': Black
  */

  _types   = [ 'P', 'B', 'N', 'R', 'Q', 'K' ];
  _colors  = [ 'W', 'B' ];
  _representations  = [
    [ '\u2659', '\u2658', '\u2657', '\u2656', '\u2655', '\u2654' ],
    [ '\u265F', '\u265E', '\u265D', '\u265C', '\u265B', '\u265A' ]
  ]

  constructor(type, color) {
    this.type = this._types.indexOf(type);
    this.color = this._colors.indexOf(color);
  }

  print_piece() {
    process.stdout.write(this._representations[this.color][this.type]);
  }
}


module.exports = Piece;