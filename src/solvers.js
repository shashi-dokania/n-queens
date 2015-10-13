/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  var board = new Board({n: n});

  for (var i = 0; i < board.attributes['n']; i++){
    board.attributes[i][i] = 1; 
    if (board.hasAnyColConflicts() || board.hasAnyRowConflicts()){
      board.attributes[i][i] = 0;
    }
  }
  var solution = board.rows();
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  //start with empty board (all 0s)

  //loop n times (number of pieces, rows, and columns)
    //check for conflicts
    //loop n times
      //place rook at [i][j]
      //increment i and j

  //
  // for (var i = 0; i < n; i++){
  //   for (var j = 0; j < n; j++){
  //     makeBoard[i][j] = 1;

  //   }
  //   for (var k = 1; k < n; k++){

  //   }
  // }
  
  
  // function makeBoard(n){
  //   var array = new Array(n);
  //   for (var i = 0; i < n; i++){
  //     array[i] = new Array(n);
  //   }
  //   for (var i = 0; i < n; i++){
  //     for (var j = 0; j < n; j++){
  //       array[i][j] = 0;
  //     }
  //   }
  //   return array;
  // };

  // var makeBoard = makeBoard(n);


  // function placeRooks(col){
  //   var count = 0;
  //   if (col >= n){
  //     return true;
  //   }
  //   for (var i = 0; i < n; i++){
  //     if (!makeBoard.hasAnyColConflicts() && !makeBoard.hasAnyRowConflicts()){
  //         makeBoard[i][col] = 1;
  //         if (placeRooks(col + 1)){
  //           count++;
  //           return true;
  //         } else {
  //           makeBoard[i][col] = 0;
  //         }
  //     }
  //     // for (var j = 0; j < n; j++){
  //     //   makeBoard[i][j] = 1;
  //     //   if (board.hasAnyColConflicts()|| board.hasAnyRowConflicts()){
  //     //     makeBoard[i][j] = 0;
  //     //   }
  //     //   i++;
  //     //   j++;
  //     }
  //   }
  //   return count;
  

  //var solutionCount = undefined;

  //var makeBoard = makeBoard(n);


  //board.hasAnyColConflicts
  //board.hasAnyRowConflicts

  //var solution = makeBoard; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
