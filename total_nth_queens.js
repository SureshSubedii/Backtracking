const totalNQueens = (n) => {
    let result = 0;
    let columns = new Array(n).fill(false)
    let diagonal1 = new Array(2 * n - 1).fill(false)
    let diagonal2 = new Array(2 * n - 1).fill(false)

    const solve = (row) => {
        if(row === n){
            result ++
            return
        }
        for (let col = 0; col < n; col++) {
            if(!columns[col] && !diagonal1[row - col + n -1] && !diagonal2[row + col]){
                columns[col]  = diagonal1[row - col + n - 1] = diagonal2[row + col] = true
                solve(row + 1)
                columns[col]  = diagonal1[row - col + n - 1] = diagonal2[row + col] = false



            }
            
        }
    }



    solve(0);
    return result;
};