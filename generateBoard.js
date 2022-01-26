const generateBoard = function (whiteQ, blackQ) {
  let chessBoard = [];
  for (let i = 0; i < 8; i++) {
    chessBoard.push([]);
    // let chessRow = [];
    for (let j = 0; j < 8; j++) {
      chessBoard[i].push(0);
      // chessRow.push(0);
    }
    //console.log(chessRow);
    //chessBoard.push(chessRow);
  }
  chessBoard[whiteQ[0]][whiteQ[1]] = 1;
  chessBoard[blackQ[0]][blackQ[1]] = 1;

  //console.table(chessBoard);
  return chessBoard;
};
const queenThreat = function (boardForChess) {
  let queen1 = whiteQueen;
  let queen2 = blackQueen;
  for (let i = 0; i < boardForChess.length; i++) {
    for (let j = 0; j < boardForChess[i].length; j++) {
      //check for queens present in X or Y line
      if (queen1[1] === queen2[1] || queen1[0] === queen2[0]) {
        return true;
      }
      //check for present in diagonal
      else if (
        Math.abs(queen1[1] - queen2[1]) === Math.abs(queen1[0] - queen2[0])
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
