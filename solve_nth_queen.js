// The N-Queens problem involves placing N chess queens on an N×N chessboard such that no two queens attack each other

let board
let n
const isSafe =(row, col) => {
    for (let index = 0; index < row; index++) {
        if(board[index][col] === "Q") return false
    }

    for (let i = row, j =col;  i >= 0 && j >= 0 ; j--, i--) {
        if(board[i][j] === "Q") return false

    }
    for (let i = row, j =col;  i >= 0 && j <= n ; j++, i--) {
        if(board[i][j] === "Q") return false

    }
    return true


}

const solve =(row)=>{
    if( row === n){
        console.log(board)
        return true
    }
    for (let col = 0; col <  n ; col++) {
        if(isSafe(row, col)){
            board[row][col] = "Q"
            if(solve(row + 1)) return true

        }
        board[row][col] = "-"
    }
    return false

}

const solveNthQueen = (size) => {
    board = new Array(size).fill(0).map(()=> new Array(size).fill("-"))
    n = size
    solve(0)
}

//All possible board configurations
const solveNQueens = (size) => {
    let board = new Array(size).fill(0).map(() => new Array(size).fill("."));
    let n = size;
    let result = [];

    const isSafe = (row, col) => {
        // Check the same column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === "Q") return false;
        }

        // Check upper-left diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === "Q") return false;
        }

        // Check upper-right diagonal
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === "Q") return false;
        }

        return true;
    };

    const solve = (row) => {
        if (row === n) {
            result.push([...board.map((item) => item.join(""))]);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = "Q";
                solve(row + 1);
                board[row][col] = "."; // Backtrack
            }
        }
    };

    solve(0);
    return result;
};


