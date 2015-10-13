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
window.countNRooksSolutions = function(n, col) {

  col = 0;
  var board = new Board({n: n});
  var solutionCount = 0;
  var rooks = 0;
  for (var i = 0; i < board.attributes['n']; i++){
    var row = board.get(i);
    row[col] = 1;
    if (board.hasAnyColConflicts() || board.hasAnyRowConflicts()){
        row[col] = 0;
    } else {
      rooks++;
      if(rooks === n){
        solutionCount++;
        rooks = 0;
        countNRooksSolutions(n, col+1);
      }
    }
  }

  // col = 0;
  // var board = new Board({n: n});
  // var solutionCount = 0;
  // var rooks = 0;
  // for (var i = 0; i < board.attributes['n']; i++){
  //   var row = board.get(i);
  //   for (var k = 0; k < board.attributes['n']; k++){
  //     row[k] = 1;
  //     if (board.hasAnyColConflicts() || board.hasAnyRowConflicts()){
  //       row[k] = 0;
  //     } else {
  //       rooks++;
  //     }
  //   }
  //   if (rooks === n){
  //     solutionCount++;
  //     console.log(board.rows());

  //   }
  // }

  //clear board, 
  //solution count ++ when i = n && # of rooks = n;

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
