// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.
var combine = function(n, k) {
    let result = []
    const backtrack = (start, path = []) => {
        if(path.length === k){
            result.push([...path])
            return
        }
        for (let i = start; i <= n - (k - path.length) + 1; i++) {

            path.push(i)
            backtrack(i + 1, path)
            path.pop()
        }

    }
    backtrack(1, [])
    return result
    
};