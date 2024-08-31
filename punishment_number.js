//Given a positive integer n, return the punishment number of n.
//The punishment number of n is defined as the sum of the squares of all integers i such that:
//1 <= i <= n
//The decimal representation of i * i can be partitioned into contiguous substrings such that the sum of the integer values of these substrings equals i.

var punishmentNumber = function(n) {
    let result = 0
    let digitsSum = 0
    const backtrack = (path, start, squared, num) => {
        if(digitsSum || squared.length === 1){
             return
              }
        if(start === squared.length){
            let sum = path.reduce((acc,curr) => acc + parseInt(curr), 0)

            if(sum == num){
                result += Number(squared)
                digitsSum = sum
            }
            return
        }
        for(let i = start; i < squared.length; i ++){
            if(digitsSum) break

            path.push(squared.slice(start, i + 1))
            backtrack(path, i + 1, squared, num)
            path.pop()
        }
    }

    for(let i = 1; i <= n; i ++){
            let squared = i ** 2
            if( ((i % 9) === 1) || ( i % 9) === 0 ) {
            backtrack([], 0, String(squared), String(i))
            digitsSum = 0
            }

    }
    return result + 1
    
};