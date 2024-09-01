// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.



const parenthesis = (n) => {
    let result = []

    const backtrack = (path, open, close) => {
        if(path.length === 2 * n){
            result.push(path)
        }
        if(open < n) backtrack(path + "(", open + 1, close)
         
        if(close < open) backtrack(path + ")", open, close + 1)
    } 

    backtrack("", 0, 0)
    return result
}