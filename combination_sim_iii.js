// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.


var combinationSum3 = function(k, n) {
    let result = []
    const backtrack = (start, path) => {
        if(path.length === k){
            let sum = path.reduce((acc,curr) => acc + curr, 0)
            if(sum === n) result.push([...path])
            return
        }
        for(let i = start; i <= 9; i ++){
            path.push(i)
            backtrack(i + 1, path)
            path.pop()
        }
    }
    backtrack(1, [])
    return result
    
};